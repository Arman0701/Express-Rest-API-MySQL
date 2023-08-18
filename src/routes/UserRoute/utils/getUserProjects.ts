import db from "../../../config/database.js"
import { IProject } from "../../../types/models.js"
import Error, { IHandler } from "../../../utils/throwError.js"

const query: string = `
    SELECT  projects.id, projects.name, projects.description, projects.userID
    FROM projects, users
    WHERE projects.userID = users.id AND projects.userID = ? 
`

export default async (id: number): Promise<IProject[] | IHandler> => {
	if (!id) return Error.User().iD404()

	const [result] = await db.query(query, [id])
	return result
}
