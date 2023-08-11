const db = require("../../../config/database")
const getUser = require("./getUser")
const query = `
    DELETE FROM users
    WHERE id = ?
`

module.exports = async (id) => {
	await db.query("USE simpledb")
	const user = await getUser(id)
	await db.query(query, [id])
	return user
}
