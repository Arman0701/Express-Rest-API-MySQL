import db from "../../../config/database.js"
import Error from "../../../utils/throwError.js"
import getProject from "./getProject.js"

import { IBody, IProject, UProjectReturnType } from "../../../types/models.js"

export default async (body: IBody, id: number): UProjectReturnType => {
	if (!id) return Error.Project().iD404()
	if (!body) return Error.Project().body404()

	const query: string = `
        UPDATE projects
        SET ${Object.keys(body)
			.map((key) => `${key} = '${body[key]}'`)
			.join(", ")}
        WHERE id = ${id}
    `

	await db.query(query)
	return await getProject(id)
}
