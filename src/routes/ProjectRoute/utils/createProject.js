const db = require("../../../config/database")
const getProject = require("./getProject")
const query = `
    INSERT INTO projects (name, description, userID)
    VALUES (?, ?, ?)
`

module.exports = async (name, desc, userID) => {
	const [project] = await db.query(query, [name, desc, userID])
	return await getProject(project.insertId)
}
