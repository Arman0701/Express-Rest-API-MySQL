import db from "../../../config/database.js";
const query = `
    SELECT *
    FROM projects
`;
export default async () => {
    const [projects] = await db.query(query);
    return projects;
};
