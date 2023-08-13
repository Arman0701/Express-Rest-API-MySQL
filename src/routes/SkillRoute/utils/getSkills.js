import db from "../../../config/database"

const query = `
    SELECT *
    FROM skills
`

module.exports = async () => {
	const [skills] = await db.query(query)
	return skills
}
