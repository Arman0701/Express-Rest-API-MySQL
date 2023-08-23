import { ResultSetHeader } from "mysql2"
import db from "../../../config/database.js"
import { IUser, UUserReturnType } from "../../../types/models.js"
import Error, { IHandler } from "../../../utils/throwError.js"
import getUser from "./getUser.js"

const query: string = `
    INSERT INTO users (username, email)
    VALUES (?, ?)
`

export default async ({ username, email }: IUser): UUserReturnType => {
	if (!email) {
		return Error.User().email404()
	}
	if (!username) {
		return Error.User().username404()
	}

	const [user] = await db.query<ResultSetHeader>(query, [username, email])
	console.log("user ::: ", user)
	
	return await getUser(user.insertId)
}
