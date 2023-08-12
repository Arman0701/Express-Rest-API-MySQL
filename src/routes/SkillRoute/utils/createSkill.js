const db = require("../../../config/database")
const getSkill = require("./getSkill")
const { getUser } = require("../../UserRoute/utils")
const Error = require("../../../utils/throwError")
const query = `
    INSERT INTO skills(name, image_url, userID)
    VALUES (?, ?, ?)
`

module.exports = async (name, image_url, userID) => {
	if (!userID) return Error.Skill().userID404()
	if (image_url) return Error.Skill().imageURL404()
	if (!name) return Error.Skill().name404()
	
	const user = await getUser(userID)

	if (user) {
		const [skill] = await db.query(query, [name, image_url, userID])
		return await getSkill(skill.insertId)
	}

	return `User with id '${userID}' doesn't exist.`
}
