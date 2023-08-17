import db from "../../../config/database.js"
import Error from "../../../utils/throwError.js"
import getUser from "./getUser.js"

const query: string = `
    DELETE FROM users
    WHERE id = ?
`

export default async (id: number) => {
	if (!id) {
		return Error.User().iD404()
	}

	await db.query("USE simpledb")
	const user = await getUser(id)
	await db.query(query, [id])
	return user
}
