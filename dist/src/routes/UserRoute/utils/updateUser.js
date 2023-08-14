import db from "../../../config/database.js";
import getUser from "./getUser.js";
export default async (body, id) => {
    const query = `
        UPDATE users
        SET ${Object.keys(body)
        .map((key) => `${key} = '${body[key]}'`)
        .join(", ")}
        WHERE id = ${id}
    `;
    await db.query(query);
    return await getUser(id);
};
