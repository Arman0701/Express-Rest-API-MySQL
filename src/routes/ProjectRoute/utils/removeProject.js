const db = require("../../../config/database")
const Error = require("../../../utils/throwError")
const getProject = require("./getProject")
const query = `
    DELETE FROM projects
    WHERE id = ?
`

module.exports = async (id) => {
	if (!id) return Error.Project().iD404()
	
	const project = await getProject(id)
	await db.query(query, [id])
	return project
}
