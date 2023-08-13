import db from "../../../config/database"
import Error from "../../../utils/throwError"

const query = `
    SELECT *
    FROM skills
    WHERE id = ?
`

module.exports = async (id) => {
    if (!id) return Error.Skill().iD404()
    
	const [skills] = await db.query(query, [id])
	return skills[0]
}
