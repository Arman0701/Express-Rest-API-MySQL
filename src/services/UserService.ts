import { ResultSetHeader } from "mysql2"
import { IBody, IUser, UUserReturnType } from "../types/models"
import { Error } from "../utils/throwError"

import db from "../config/database"

import { SkillService, skills } from "./SkillService"
import { ProjectService, projects } from "./ProjectService"

export class UserService {
	protected readonly skills: SkillService
	protected readonly projects: ProjectService
	
	constructor(skills: SkillService, projects: ProjectService) {
		this.skills = skills
		this.projects = projects
	}

	async getAll(): Promise<ResultSetHeader> {
		const query: string = `
            SELECT * 
            FROM users
        `
		const [users] = await db.query<ResultSetHeader>(query)
		return users
	}

	async getOneById(id: number): UUserReturnType {
		const query: string = `
            SELECT *
            FROM users
            WHERE id = ?
        `

		if (!id) {
			return Error.User().iD404()
		}

		const [users] = await db.query<ResultSetHeader[]>(query, [id])

		return users[0]
	}

	async getProjectsByUserId(id: number): UUserReturnType {
		// const query: string = `
		// 	SELECT  projects.id, projects.name, projects.description, projects.userID
		// 	FROM projects, users
		// 	WHERE projects.userID = users.id AND projects.userID = ?
		// `

		if (!id) return Error.User().iD404()

		// const [result] = await db.query<ResultSetHeader>(query, [id])
		const result = await this.projects.getByUserId(id)

		return result
	}

	async getSkillsByUserId(id: number): UUserReturnType {
		// const query: string = `
		// 	SELECT skills.id, skills.name, skills.image_url, skills.userID
		// 	FROM skills, users
		// 	WHERE skills.userID = users.id AND skills.userID = ?
		// `

		if (!id) return Error.User().iD404()

		// const [result] = await db.query<ResultSetHeader>(query, [id])
		const result = await this.skills.getByUserId(id)
		return result
	}

	async create({ username, email }: IUser): UUserReturnType {
		const query: string = `
            INSERT INTO users (username, email)
            VALUES (?, ?)
        `
		if (!email) {
			return Error.User().email404()
		}
		if (!username) {
			return Error.User().username404()
		}

		const [user] = await db.query<ResultSetHeader>(query, [username, email])

		return await this.getOneById(user.insertId)
	}

	async removeById(id: number): UUserReturnType {
		const query: string = `
            DELETE FROM users
            WHERE id = ?
        `

		if (!id) {
			return Error.User().iD404()
		}

		const user = await this.getOneById(id)
		await db.query<ResultSetHeader>(query, [id])
		return user
	}

	async updateById(body: IBody, id: number): UUserReturnType {
		const validBody = Object.values(body).every((value) => Boolean(value))
		if (!body || !validBody) return Error.User().body404()
		if (!id) return Error.User().iD404()

		const query: string = `
            UPDATE users
            SET ${Object.keys(body)
				.map((key) => `${key} = '${body[key]}'`)
				.join(", ")}
            WHERE id = ?
        `

		await db.query<ResultSetHeader>(query, [id])
		return await this.getOneById(id)
	}
}

export const users = new UserService(skills, projects)
