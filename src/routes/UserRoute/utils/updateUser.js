const db = require("../../../config/database")
const getUser = require("./getUser")

module.exports = async (body, id) => {
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
