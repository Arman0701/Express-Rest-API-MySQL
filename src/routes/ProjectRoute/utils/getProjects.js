const db = require("../../../config/database")
const query = `
    SELECT *
    FROM projects
`

module.exports = async () => {
	const [projects] = await db.query(query)
	return projects
}
