import db from "../../../config/database.js";
const query = `
    SELECT *
    FROM projects
    WHERE id = ?
`;
export default async (id) => {
    const [projects] = await db.query(query, [id]);
    return projects[0];
};
