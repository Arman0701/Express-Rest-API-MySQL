const db = require("../../../config/database")
const query = `
    SELECT  projects.id, projects.name, projects.description, projects.userID
    FROM projects, users
    WHERE projects.userID = users.id AND projects.userID = ? 
`

module.exports = async (id) => {
	const [result] = await db.query(query, [+id])
	return result
}
