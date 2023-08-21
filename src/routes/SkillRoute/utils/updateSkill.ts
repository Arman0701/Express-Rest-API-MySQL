import db from "../../../config/database.js"
import { IBody, USkillReturnType } from "../../../types/models.js"
import Error from "../../../utils/throwError.js"
import getSkill from "./getSkill.js"

export default async (body: IBody, id: number): USkillReturnType => {
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

	await db.query(query, [id])
	return await getSkill(id)
}
