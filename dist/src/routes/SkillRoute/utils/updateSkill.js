import db from "../../../config/database.js";
import getSkill from "./getSkill.js";
export default async (body, id) => {
    const query = `
        UPDATE skills
        SET ${Object.keys(body)
        .map((key) => `${key} = '${body[key]}'`)
        .join(", ")}
        WHERE id = ${id}
    `;
    await db.query(query);
    return await getSkill(id);
};
