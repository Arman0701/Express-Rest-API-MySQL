import db from "../../../config/database.js"
import getProject from "./getProject.js"
import { getUser } from "../../UserRoute/utils/index.js"
// import Error from "../../../utils/throwError.js"

const query: string = `
    INSERT INTO projects (name, description, userID)
    VALUES (?, ?, ?)
`

export default async (name: string, desc: string, userID: number) => {
	// if (!userID) return Error.Project().userID404()
	// if (!desc) return Error.Project().description404()
	// if (!name) return Error.Project().name404()

	const user = await getUser(userID)
	if (user) {
		const [project] = await db.query(query, [name, desc, userID])

		// @ts-ignore
		return await getProject(project.insertId)
	}

	return `User with id '${userID}' doesn't exist.`
}
