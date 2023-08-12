const db = require("../../../config/database")
const Error = require("../../../utils/throwError")
const query = `
    SELECT *
    FROM projects
    WHERE id = ?
`

module.exports = async (id) => {
    if (!id) return Error.Project().iD404()
    
    const [projects] = await db.query(query, [id])
    return projects[0]
}