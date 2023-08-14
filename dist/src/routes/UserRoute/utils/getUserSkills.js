import db from "../../../config/database.js";
const query = `
    SELECT skills.id, skills.name, skills.image_url, skills.userID
    FROM skills, users
    WHERE skills.userID = users.id AND skills.userID = ?
`;
export default async (id) => {
    const [result] = await db.query(query, [+id]);
    return result;
};
