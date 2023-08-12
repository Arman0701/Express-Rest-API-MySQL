const db = require("../../../config/database")
const Error = require("../../../utils/throwError")
const getUser = require("./getUser")
const query = `
    DELETE FROM users
    WHERE id = ?
`

module.exports = async (id) => {
	if (!id) {
        return Error.User().iD404()
    }

	await db.query("USE simpledb")
	const user = await getUser(id)
	await db.query(query, [id])
	return user
}
