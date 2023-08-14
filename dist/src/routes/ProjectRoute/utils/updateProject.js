import db from "../../../config/database.js";
import getProject from "./getProject.js";
export default async (body, id) => {
    const query = `
        UPDATE projects
        SET ${Object.keys(body)
        .map((key) => `${key} = '${body[key]}'`)
        .join(", ")}
        WHERE id = ${id}
    `;
    await db.query(query);
    return await getProject(id);
};
