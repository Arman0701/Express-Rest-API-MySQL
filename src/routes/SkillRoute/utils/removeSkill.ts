import db from "../../../config/database"
import Error from "../../../utils/throwError"
import getSkill from "./getSkill"

const query = `
    DELETE FROM skills
    WHERE id = ?
`

export default async (id: number) => {
	if (!id) return Error.Skill().iD404()

	const skill = await getSkill(id)
	await db.query(query, [id])
	return skill
}
