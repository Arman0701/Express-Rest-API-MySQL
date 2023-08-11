const db = require("../../../config/database")
const getSkill = require("./getSkill")
const query = `
    INSERT INTO skills(name, image_url, userID)
    VALUES (?, ?, ?)
`

module.exports = async (name, image_url, userID) => {
	const [skill] = await db.query(query, [name, image_url, userID])
	return await getSkill(skill.insertId)
}
