const db = require("../../../config/database")
const getSkill = require("./getSkill")
const query = `
    DELETE FROM skills
    WHERE id = ?
`

module.exports = async (id) => {
	const skill = await getSkill(id)
	await db.query(query, [id])
	return skill
}
