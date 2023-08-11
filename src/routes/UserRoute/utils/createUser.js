const db = require("../../../config/database")
const getUser = require("./getUser")
const query = `
    INSERT INTO users (username, email)
    VALUES (?, ?)
`

module.exports = async (username, email) => {
    const [ID] = await db.query(query, [username, email])
    return await getUser(ID.insertId)
}