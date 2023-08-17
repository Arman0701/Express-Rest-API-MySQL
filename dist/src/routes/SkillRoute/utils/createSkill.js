import db from "../../../config/database.js";
import getSkill from "./getSkill.js";
import { getUser } from "../../UserRoute/utils/index.js";
import Error from "../../../utils/throwError.js";
const query = `
    INSERT INTO skills(name, image_url, userID)
    VALUES (?, ?, ?)
`;
export default async (name, image_url, userID) => {
    if (!userID)
        return Error.Skill().userID404();
    if (image_url)
        return Error.Skill().imageURL404();
    if (!name)
        return Error.Skill().name404();
    const user = await getUser(userID);
    if (user) {
        const [skill] = await db.query(query, [name, image_url, userID]);
        return await getSkill(skill.insertId);
    }
    return `User with id '${userID}' doesn't exist.`;
};
