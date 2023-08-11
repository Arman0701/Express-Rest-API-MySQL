const db = require("../../../config/database")
const getProject = require("./getProject")
const query = `
    DELETE FROM projects
    WHERE id = ?
`

module.exports = async (id) => {
	const project = await getProject(id)
	await db.query(query, [id])
	return project
}
