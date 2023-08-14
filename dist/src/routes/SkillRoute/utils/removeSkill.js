import db from "../../../config/database.js";
import getSkill from "./getSkill.js";
const query = `
    DELETE FROM skills
    WHERE id = ?
`;
export default async (id) => {
    const skill = await getSkill(id);
    await db.query(query, [id]);
    return skill;
};
