import { Request, Response } from "express"

import {
	getUsers,
	getUser,
	createUser,
	removeUser,
	updateUser,
	getUserProjects,
	getUserSkills,
} from "./utils/index.js"

import express from "express"
const router = express.Router()

router.get("/", async (req: Request, res: Response) => {
	const user = await getUsers()
	res.send(user)
})

router.get("/:id", async (req: Request, res: Response) => {
	const user = await getUser(+req.params.id)
	res.send(user)
})

router.get("/:id/projects", async (req: Request, res: Response) => {
	const projects = await getUserProjects(+req.params.id)
	res.send(projects)
})

router.get("/:id/skills", async (req: Request, res: Response) => {
	const projects = await getUserSkills(+req.params.id)
	res.send(projects)
})

router.post("/", async (req: Request, res: Response) => {
	const result = await createUser(req.body)
	res.send(result)
})

router.patch("/:id", async (req: Request, res: Response) => {
	const user = await updateUser(req.body, +req.params.id)
	res.send(user)
})

router.delete("/:id", async (req: Request, res: Response) => {
	const user = await removeUser(+req.params.id)
	res.send(user)
})

export default router
