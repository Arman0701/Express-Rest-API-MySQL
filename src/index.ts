import express, { NextFunction, Request, Response } from "express"
import "dotenv/config"

import userRouter from "./routes/user.js"
import skillRouter from "./routes/skill.js"
import projectRouter from "./routes/project.js"

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.use("/user", userRouter)
app.use("/skill", skillRouter)
app.use("/project", projectRouter)

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
	console.error(err)
	res.status(500).send("Server crashed.")
})

app.listen(PORT, () => {
	console.log(`Server has been started on port ${PORT}...`)
})
