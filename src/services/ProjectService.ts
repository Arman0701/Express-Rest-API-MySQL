import { ResultSetHeader } from "mysql2"
import db from "../config/database"
import { IBody, IProject, UProjectReturnType } from "../types/models"
import { Error } from "../utils/throwError"

import { users } from "./UserService"

export class ProjectService {
	// TODO: constructor should get all users from User service
	// but I'm getting some type errors
	
	constructor() {}

	async getAll(): UProjectReturnType {
		const query: string = `
			SELECT *
			FROM projects
		`

		const [projects] = await db.query<ResultSetHeader>(query)
		return projects
	}

	async getOneById(id: number): UProjectReturnType {
		const query: string = `
			SELECT *
			FROM projects
			WHERE id = ?
		`

		if (!id) return Error.Project().iD404()

		const [projects] = await db.query<ResultSetHeader[]>(query, [id])
		return projects[0]
	}

	async getByUserId(userId: number): UProjectReturnType {
		const query: string = `
			SELECT *
			FROM projects
			WHERE userID = ?
		`

		const [project] = await db.query<ResultSetHeader>(query, [userId])
		return project
	}

	async create({ name, description, userID }: IProject): UProjectReturnType {
		const query: string = `
			INSERT INTO projects (name, description, userID)
			VALUES (?, ?, ?)
		`

		if (!userID) return Error.Project().userID404()
		if (!description) return Error.Project().description404()
		if (!name) return Error.Project().name404()

		const user = await users.getOneById(userID)
		// TODO: on previous line also needed fixing issue of dependency injection

		if (user) {
			const [project] = await db.query<ResultSetHeader>(query, [
				name,
				description,
				userID,
			])

			return await this.getOneById(project.insertId)
		}

		return { message: `User with id '${userID}' doesn't exist.` }
	}

	async removeById(id: number): UProjectReturnType {
		const query: string = `
			DELETE FROM projects
			WHERE id = ?
		`

		if (!id) return Error.Project().iD404()

		const project = await this.getOneById(id)
		await db.query(query, [id])
		return project
	}

	async updateById(body: IBody, id: number): UProjectReturnType {
		const validBody = Object.values(body).every((value) => Boolean(value))
		if (!body || !validBody) return Error.User().body404()
		if (!id) return Error.Project().iD404()

		const query: string = `
			UPDATE projects
			SET ${Object.keys(body)
				.map((key) => `${key} = '${body[key]}'`)
				.join(", ")}
			WHERE id = ?
		`

		await db.query(query, [id])
		return await this.getOneById(id)
	}
}

export const projects = new ProjectService()
