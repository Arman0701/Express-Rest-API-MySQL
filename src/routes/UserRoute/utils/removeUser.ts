import db from "../../../config/database"
import Error from "../../../utils/throwError"
import getUser from "./getUser"

const query = `
    DELETE FROM users
    WHERE id = ?
`

export default async (id) => {
	if (!id) {
		return Error.User().iD404()
	}

	await db.query("USE simpledb")
	const user = await getUser(id)
	await db.query(query, [id])
	return user
}
