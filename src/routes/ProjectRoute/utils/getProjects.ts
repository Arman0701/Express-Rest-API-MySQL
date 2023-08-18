import db from "../../../config/database.js"
const query: string = `
    SELECT *
    FROM projects
`

// TODO: add the return type of function
export default async () => {
	const [projects] = await db.query(query)
	return projects
}
