import db from "../../../config/database.js"

const query: string = `
    SELECT * 
    FROM users
`
export default async () => {
	const [users] = await db.query(query)
	return users
}
