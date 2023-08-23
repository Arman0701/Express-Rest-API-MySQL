import { ResultSetHeader } from "mysql2"
import db from "../../../config/database.js"
import { UUserReturnType } from "../../../types/models.js"
import Error from "../../../utils/throwError.js"

const query: string = `
    SELECT *
    FROM users
    WHERE id = ?
`

export default async (id: number): UUserReturnType => {
	if (!id) {
		return Error.User().iD404()
	}

	const [users] = await db.query<ResultSetHeader[]>(query, [id])

	return users[0]
}
