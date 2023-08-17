import db from "../../../config/database.js";
import Error from "../../../utils/throwError.js";
const query = `
    SELECT *
    FROM users
    WHERE id = ?
`;
export default async (id) => {
    if (!id) {
        return Error.User().iD404();
    }
    const [users] = await db.query(query, [id]);
    return users[0];
};
