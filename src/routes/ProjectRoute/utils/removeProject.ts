import db from "../../../config/database"
import Error from "../../../utils/throwError"
import getProject from "./getProject"

const query = `
    DELETE FROM projects
    WHERE id = ?
`

export default async (id) => {
	if (!id) return Error.Project().iD404()

	const project = await getProject(id)
	await db.query(query, [id])
	return project
}
