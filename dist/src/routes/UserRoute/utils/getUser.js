import db from "../../../config/database.js";
const query = `
    SELECT *
    FROM users
    WHERE id = ?
`;
export default async (id) => {
    const [users] = await db.query(query, [id]);
    return users[0];
};
