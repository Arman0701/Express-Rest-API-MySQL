import db from "../../../config/database"

const query = `
    SELECT * 
    FROM users
`
export default async () => {
	const [users] = await db.query(query)
	return users
}
