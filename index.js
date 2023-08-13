// app init
import express from "express"
const app = express()
require("dotenv").config()

// adding middlewares
app.use(express.json())

// importing routes and initialize them
import userRouter from  "./src/routes/UserRoute/user"
import skillRouter from  "./src/routes/SkillRoute/skill"
import projectRouter from  "./src/routes/ProjectRoute/project"

app.use("/user", userRouter)
app.use("/skill", skillRouter)
app.use("/project", projectRouter)

// error handlers
app.use((err, req, res, next) => {
	console.error(err)
	res.status(500).send("Server crashed.")
})

app.listen("3000", () => {
	console.log("Server has been started on port 3000...")
})
