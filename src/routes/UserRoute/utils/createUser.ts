import db from "../../../config/database.js"
import Error, { IHandler } from "../../../utils/throwError.js"
import getUser from "./getUser.js"

const query: string = `
    INSERT INTO users (username, email)
    VALUES (?, ?)
`

import { RowDataPacket } from "mysql2"

interface IUser extends RowDataPacket {
	id: number
	username: string
	email: string
}

export default async (
	username: string,
	email: string
): Promise<IUser | IHandler> => {
	if (!email) {
		return Error.User().email404()
	}
	if (!username) {
		return Error.User().username404()
	}

	const [user] = await db.query(query, [username, email])
	// @ts-ignore
	return await getUser(user.insertId)
}
