const db = require("../../../config/database")
const query = `
    SELECT skills.id, skills.name, skills.image_url, skills.userID
    FROM skills, users
    WHERE skills.userID = users.id AND skills.userID = ?
`

module.exports = async (id) => {
	const [result] = await db.query(query, [+id])
	return result
}
