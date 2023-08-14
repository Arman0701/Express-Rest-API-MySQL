import db from "../../../config/database.js";
import getUser from "./getUser.js";
const query = `
    INSERT INTO users (username, email)
    VALUES (?, ?)
`;
export default async (username, email) => {
    const [user] = await db.query(query, [username, email]);
    return await getUser(user.insertId);
};
