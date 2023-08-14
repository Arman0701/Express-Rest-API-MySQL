import db from "../../../config/database.js"
import Error from "../../../utils/throwError.js"
import getUser from "./getUser.js"

const query = `
    INSERT INTO users (username, email)
    VALUES (?, ?)
`

export default async (username, email) => {
	if (!email) {
		return Error.User().email404()
	}
	if (!username) {
		return Error.User().username404()
	}

	const [user] = await db.query(query, [username, email])
	return await getUser(user.insertId)
}
