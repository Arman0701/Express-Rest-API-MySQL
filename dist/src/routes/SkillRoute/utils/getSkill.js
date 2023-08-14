import db from "../../../config/database.js";
const query = `
    SELECT *
    FROM skills
    WHERE id = ?
`;
export default async (id) => {
    const [skills] = await db.query(query, [id]);
    return skills[0];
};
