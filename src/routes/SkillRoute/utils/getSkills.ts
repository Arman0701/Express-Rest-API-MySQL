import db from "../../../config/database.js"

const query: string = `
    SELECT *
    FROM skills
`

export default async () => {
	const [skills] = await db.query(query)
	return skills
}
