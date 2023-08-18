import db from "../../../config/database.js"

const query: string = `
    SELECT *
    FROM skills
`

// TODO: add the return type of function
export default async () => {
	const [skills] = await db.query(query)
	return skills
}
