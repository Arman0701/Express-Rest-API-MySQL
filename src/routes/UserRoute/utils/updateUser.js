import db from "../../../config/database"
import Error from "../../../utils/throwError"
import getUser from "./getUser"

module.exports = async (body, id) => {
	if (!body) return Error.User().body404()
	if (!id) return Error.User().iD404()

	const query = `
        UPDATE users
        SET ${Object.keys(body)
			.map((key) => `${key} = '${body[key]}'`)
			.join(", ")}
        WHERE id = ${id}
    `

	await db.query(query)
	return await getUser(id)
}
