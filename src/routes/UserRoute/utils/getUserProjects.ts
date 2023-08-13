import db from "../../../config/database"
import Error from "../../../utils/throwError"

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
