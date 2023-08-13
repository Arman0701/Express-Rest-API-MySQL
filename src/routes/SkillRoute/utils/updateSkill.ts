import db from "../../../config/database"
import Error from "../../../utils/throwError"
import getSkill from "./getSkill"

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
