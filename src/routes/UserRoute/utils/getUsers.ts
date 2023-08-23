import { ResultSetHeader } from "mysql2"
import db from "../../../config/database.js"
import { IUser } from "../../../types/models.js"

const query: string = `
    SELECT * 
    FROM users
`

export default async (): Promise<ResultSetHeader> => {
	const [users] = await db.query<ResultSetHeader>(query)
	return users
}
