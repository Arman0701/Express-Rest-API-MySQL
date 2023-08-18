import db from "../../../config/database.js"
import { ISkill } from "../../../types/models.js"
import Error, { IHandler } from "../../../utils/throwError.js"

const query: string = `
    SELECT skills.id, skills.name, skills.image_url, skills.userID
    FROM skills, users
    WHERE skills.userID = users.id AND skills.userID = ?
`

export default async (id: number): Promise<ISkill | IHandler> => {
	if (!id) return Error.User().iD404()

	const [result] = await db.query(query, [id])
	return result
}
