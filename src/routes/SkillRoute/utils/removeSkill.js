const db = require("../../../config/database")
const Error = require("../../../utils/throwError")
const getSkill = require("./getSkill")
const query = `
    DELETE FROM skills
    WHERE id = ?
`

module.exports = async (id) => {
	if (!id) return Error.Skill().iD404()
	
	const skill = await getSkill(id)
	await db.query(query, [id])
	return skill
}
