const db = require("../../../config/database")
const query = `
    SELECT * 
    FROM users
`

module.exports = async () => {
	const [users] = await db.query(query)
	return users
}
