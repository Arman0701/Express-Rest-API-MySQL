import db from "../../../config/database.js"
// import Error from "../../../utils/throwError.js"
import getUser from "./getUser.js"

export default async (body: any, id: number) => {
	// if (!body) return Error.User().body404()
	// if (!id) return Error.User().iD404()

	const query: string = `
        UPDATE users
        SET ${Object.keys(body)
			.map((key) => `${key} = '${body[key]}'`)
			.join(", ")}
        WHERE id = ${id}
    `

	await db.query(query)
	return await getUser(id)
}
