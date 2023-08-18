import db from "../../../config/database.js"
import { IUser } from "../../../types/models.js"

const query: string = `
    SELECT * 
    FROM users
`

// TODO: add the return type of function
export default async () => {
	const [users] = await db.query(query)
	return users
}
