const db = require("../../../config/database")
const Error = require("../../../utils/throwError")
const getUser = require("./getUser")

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
