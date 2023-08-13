import db from "../../../config/database"

const query = `
    SELECT *
    FROM skills
`

export default async () => {
	const [skills] = await db.query(query)
	return skills
}
