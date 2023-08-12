const db = require("../../../config/database")
const Error = require("../../../utils/throwError")
const getUser = require("./getUser")
const query = `
    INSERT INTO users (username, email)
    VALUES (?, ?)
`

module.exports = async (username, email) => {
	if (!email) {
		return Error.User().email404()
	}
	if (!username) {
		return Error.User().username404()
	}

	const [user] = await db.query(query, [username, email])
	return await getUser(user.insertId)
}
