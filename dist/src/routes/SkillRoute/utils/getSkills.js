import db from "../../../config/database.js";
const query = `
    SELECT *
    FROM skills
`;
export default async () => {
    const [skills] = await db.query(query);
    return skills;
};
