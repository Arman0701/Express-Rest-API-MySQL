import db from "../../../config/database.js";
import getUser from "./getUser.js";
const query = `
    DELETE FROM users
    WHERE id = ?
`;
export default async (id) => {
    await db.query("USE simpledb");
    const user = await getUser(id);
    await db.query(query, [id]);
    return user;
};
