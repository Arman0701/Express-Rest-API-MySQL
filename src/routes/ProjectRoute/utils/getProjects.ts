import db from "../../../config/database"
const query = `
    SELECT *
    FROM projects
`

export default async () => {
	const [projects] = await db.query(query)
	return projects
}
