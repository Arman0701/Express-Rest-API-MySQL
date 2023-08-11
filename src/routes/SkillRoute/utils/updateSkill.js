const db = require("../../../config/database")
const getSkill = require("./getSkill")

module.exports = async (body, id) => {
	const query = `
        UPDATE skills
        SET ${Object.keys(body)
			.map((key) => `${key} = '${body[key]}'`)
			.join(", ")}
        WHERE id = ${id}
    `

	await db.query(query)
	return await getSkill(id)
}
