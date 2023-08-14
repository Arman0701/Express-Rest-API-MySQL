import db from "../../../config/database.js"
import Error from "../../../utils/throwError.js"
import getProject from "./getProject.js"

export default async (body, id) => {
	if (!id) return Error.Project().iD404()
	if (!body) return Error.Project().body404()

	const query = `
        UPDATE projects
        SET ${Object.keys(body)
			.map((key) => `${key} = '${body[key]}'`)
			.join(", ")}
        WHERE id = ${id}
    `

	await db.query(query)
	return await getProject(id)
}
