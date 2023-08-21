import db from "../../../config/database.js"
import Error from "../../../utils/throwError.js"
import getProject from "./getProject.js"

import { IBody, IProject, UProjectReturnType } from "../../../types/models.js"

export default async (body: IBody, id: number): UProjectReturnType => {
	const validBody = Object.values(body).every((value) => Boolean(value))
	if (!body || !validBody) return Error.User().body404()
	if (!id) return Error.Project().iD404()

	const query: string = `
        UPDATE projects
        SET ${Object.keys(body)
			.map((key) => `${key} = '${body[key]}'`)
			.join(", ")}
        WHERE id = ?
    `

	await db.query(query, [id])
	return await getProject(id)
}
