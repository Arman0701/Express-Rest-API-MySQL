import db from "../../../config/database.js"
import Error from "../../../utils/throwError.js"

const query = `
    SELECT *
    FROM skills
    WHERE id = ?
`

export default async (id) => {
	if (!id) return Error.Skill().iD404()

	const [skills] = await db.query(query, [id])
	return skills[0]
}
