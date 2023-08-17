import db from "../../../config/database.js";
import Error from "../../../utils/throwError.js";
import getProject from "./getProject.js";
const query = `
    DELETE FROM projects
    WHERE id = ?
`;
export default async (id) => {
    if (!id)
        return Error.Project().iD404();
    const project = await getProject(id);
    await db.query(query, [id]);
    return project;
};
