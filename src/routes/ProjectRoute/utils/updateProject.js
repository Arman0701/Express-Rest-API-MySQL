const db = require("../../../config/database")
const getProject = require("./getProject")

module.exports = async (body, id) => {
	const query = `
        UPDATE projects
        SET ${Object.keys(body)
			.map((key) => `${key} = '${body[key]}'`)
			.join(", ")}
        WHERE id = ${id}
    `

	await db.query(query)
	return await getProject(id)
}
