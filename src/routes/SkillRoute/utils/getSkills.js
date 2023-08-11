const db = require("../../../config/database")
const query = `
    SELECT *
    FROM skills
`

module.exports = async (id) => {
	const [skills] = await db.query(query, [id])
	return skills
}
