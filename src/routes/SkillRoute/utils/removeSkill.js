import db from "../../../config/database.js"
import Error from "../../../utils/throwError.js"
import getSkill from "./getSkill.js"

const query = `
    DELETE FROM skills
    WHERE id = ?
`

export default async (id) => {
	if (!id) return Error.Skill().iD404()

	const skill = await getSkill(id)
	await db.query(query, [id])
	return skill
}
