// app init
const express = require("express")
const app = express()
require("dotenv").config()

// adding middlewares
app.use(express.json())

// importing routes and initialize them
const userRouter = require("./src/routes/UserRoute/user")
const skillRouter = require("./src/routes/SkillRoute/skill")
const projectRouter = require("./src/routes/ProjectRoute/project")

app.use("/user", userRouter)
app.use("/skill", skillRouter)
app.use("/project", projectRouter)

app.listen("3000", () => {
	console.log("Server has been started on port 3000...")
})
