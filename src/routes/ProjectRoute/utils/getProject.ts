import db from "../../../config/database.js"
import { UProjectReturnType } from "../../../types/models.js"
import Error from "../../../utils/throwError.js"
const query: string = `
    SELECT *
    FROM projects
    WHERE id = ?
`

export default async (id: number): UProjectReturnType => {
	if (!id) return Error.Project().iD404()

	const [projects] = await db.query(query, [id])
    // @ts-ignore
	return projects[0]
}
