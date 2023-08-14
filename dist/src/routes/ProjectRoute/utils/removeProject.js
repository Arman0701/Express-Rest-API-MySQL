import db from "../../../config/database.js";
import getProject from "./getProject.js";
const query = `
    DELETE FROM projects
    WHERE id = ?
`;
export default async (id) => {
    const project = await getProject(id);
    await db.query(query, [id]);
    return project;
};
