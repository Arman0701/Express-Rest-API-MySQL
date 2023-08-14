import db from "../../../config/database.js"
import Error from "../../../utils/throwError.js"

const query = `
    SELECT  projects.id, projects.name, projects.description, projects.userID
    FROM projects, users
    WHERE projects.userID = users.id AND projects.userID = ? 
`

export default async (id) => {
	if (!id) return Error.User().iD404()

	const [result] = await db.query(query, [+id])
	return result
}
