import db from "../../../config/database.js"
import Error from "../../../utils/throwError.js"
import getSkill from "./getSkill.js"

export default async (body, id) => {
	if (!id) return Error.Skill().iD404()
	if (!body) return Error.Skill().body404()

	const query = `
        UPDATE skills
        SET ${Object.keys(body)
			.map((key) => `${key} = '${body[key]}'`)
			.join(", ")}
        WHERE id = ${id}
    `

	await db.query(query)
	return await getSkill(id)
}
