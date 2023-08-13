import db from "../../../config/database"
import Error from "../../../utils/throwError"

const query = `
    SELECT skills.id, skills.name, skills.image_url, skills.userID
    FROM skills, users
    WHERE skills.userID = users.id AND skills.userID = ?
`

module.exports = async (id) => {
    if (!id) return Error.User().iD404()

	const [result] = await db.query(query, [+id])
	return result
}
