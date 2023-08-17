import db from "../../../config/database.js";
import Error from "../../../utils/throwError.js";
const query = `
    SELECT *
    FROM projects
    WHERE id = ?
`;
export default async (id) => {
    if (!id)
        return Error.Project().iD404();
    const [projects] = await db.query(query, [id]);
    return projects[0];
};
