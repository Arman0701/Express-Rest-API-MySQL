const db = require("../../../config/database")
const query = `
    SELECT *
    FROM projects
    WHERE id = ?
`

module.exports = async (id) => {
    const [projects] = await db.query(query, [id])
    return projects[0]
}