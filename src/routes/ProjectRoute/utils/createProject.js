import db from "../../../config/database"
import getProject from "./getProject"
import { getUser } from "../../UserRoute/utils"
import Error from "../../../utils/throwError"

const query = `
    INSERT INTO projects (name, description, userID)
    VALUES (?, ?, ?)
`

module.exports = async (name, desc, userID) => {
	if (!userID) return Error.Project().userID404()
	if (!desc) return Error.Project().description404()
	if (!name) return Error.Project().name404()

	const user = await getUser(userID)
	if (user) {
		const [project] = await db.query(query, [name, desc, userID])
		return await getProject(project.insertId)
	}

	return `User with id '${userID}' doesn't exist.`
}
