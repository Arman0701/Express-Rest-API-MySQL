import db from "../../../config/database.js"
const query: string = `
    SELECT *
    FROM projects
`

export default async () => {
	const [projects] = await db.query(query)
	return projects
}
