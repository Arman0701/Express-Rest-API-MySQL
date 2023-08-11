const db = require("../../../config/database")
const query = `
    SELECT *
    FROM skills
    WHERE id = ?
`

module.exports = async (id) => {
	const [skills] = await db.query(query, [id])
	return skills[0]
}
