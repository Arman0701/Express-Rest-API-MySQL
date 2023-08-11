const db = require("../../../config/database")
const Error = require("../../../utils/throwError")
const query = `
    SELECT *
    FROM users
    WHERE id = ?
`

module.exports = async (id) => {
    const [users] = await db.query(query, [id], (err, result) => {
        Error.error(err)
    })
    return users[0]
}