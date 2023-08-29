import { ResultSetHeader } from "mysql2"
import db from "../config/database"
import { IBody, ISkill, USkillReturnType } from "../types/models"
import { Error } from "../utils/throwError"

import { users } from "./UserService"

export class SkillService {
	//TODO: constructor should get all users from User service
	// but I'm getting some type errors

	constructor() {}

	async getAll(): USkillReturnType {
		const query: string = `
			SELECT *
			FROM skills
		`

		const [skills] = await db.query<ResultSetHeader>(query)
		return skills
	}

	async getOneById(id: number): USkillReturnType {
		const query: string = `
			SELECT *
			FROM skills
			WHERE id = ?
		`

		if (!id) return Error.Skill().iD404()

		const [skills] = await db.query<ResultSetHeader[]>(query, [id])
		return skills[0]
	}

	async getByUserId(userId: number): USkillReturnType {
		const query = `
			SELECT *
			FROM skills
			WHERE userID = ?
		`

		const [skill] = await db.query<ResultSetHeader>(query, [userId])
		return skill
	}

	async create({ name, image_url, userID }: ISkill): USkillReturnType {
		const query: string = `
		INSERT INTO skills(name, image_url, userID)
		VALUES (?, ?, ?)
		`

		if (!userID) return Error.Skill().userID404()
		if (!image_url) return Error.Skill().imageURL404()
		if (!name) return Error.Skill().name404()

		const user = await users.getOneById(userID)
		// TODO: on previous line also needed fixing issue of dependency injection

		if (user) {
			const [skill] = await db.query<ResultSetHeader>(query, [
				name,
				image_url,
				userID,
			])

			return await this.getOneById(skill.insertId)
		}

		return `User with id '${userID}' doesn't exist.`
	}

	async removeById(id: number): USkillReturnType {
		const query: string = `
			DELETE FROM skills
			WHERE id = ?
		`

		if (!id) return Error.Skill().iD404()

		const skill = await this.getOneById(id)
		await db.query<ResultSetHeader>(query, [id])
		return skill
	}

	async updateById(body: IBody, id: number): USkillReturnType {
		const validBody = Object.values(body).every((value) => Boolean(value))
		if (!body || !validBody) return Error.User().body404()
		if (!id) return Error.Skill().iD404()

		const query: string = `
			UPDATE skills
			SET ${Object.keys(body)
				.map((key) => `${key} = '${body[key]}'`)
				.join(", ")}
			WHERE id = ?
		`

		await db.query<ResultSetHeader>(query, [id])
		return await this.getOneById(id)
	}
}

export const skills = new SkillService()
