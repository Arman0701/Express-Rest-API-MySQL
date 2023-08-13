import db from "../../../config/database"
import Error from "../../../utils/throwError"

const query = `
    SELECT *
    FROM users
    WHERE id = ?
`

module.exports = async (id) => {
    if (!id) {
        return Error.User().iD404()
    }    
    
	const [users] = await db.query(query, [id])
	return users[0]
}
