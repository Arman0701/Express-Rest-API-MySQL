import express from "express";
import "dotenv/config";
import userRouter from "./src/routes/UserRoute/user.js";
import skillRouter from "./src/routes/SkillRoute/skill.js";
import projectRouter from "./src/routes/ProjectRoute/project.js";
const app = express();
app.use(express.json());
app.use("/user", userRouter);
app.use("/skill", skillRouter);
app.use("/project", projectRouter);
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send("Server crashed.");
});
app.listen("3000", () => {
    console.log("Server has been started on port 3000...");
});
