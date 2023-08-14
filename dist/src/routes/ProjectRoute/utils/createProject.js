import db from "../../../config/database.js";
import getProject from "./getProject.js";
import { getUser } from "../../UserRoute/utils/index.js";
const query = `
    INSERT INTO projects (name, description, userID)
    VALUES (?, ?, ?)
`;
export default async (name, desc, userID) => {
    const user = await getUser(userID);
    if (user) {
        const [project] = await db.query(query, [name, desc, userID]);
        return await getProject(project.insertId);
    }
    return `User with id '${userID}' doesn't exist.`;
};
