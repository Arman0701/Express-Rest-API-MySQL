import db from "../../../config/database.js"
import Error from "../../../utils/throwError.js"

const query: string = `
    SELECT *
    FROM skills
    WHERE id = ?
`

export default async (id: number) => {
	if (!id) return Error.Skill().iD404()

	const [skills] = await db.query(query, [id])
    // @ts-ignore
	return skills[0]
}
