import { Request, Response } from "express"

import {
	getProject,
	getProjects,
	createProject,
	updateProject,
	removeProject,
} from "./utils/index.js"

import express from "express"
const router = express.Router()

router.get("/", async (req: Request, res: Response) => {
	const projects = await getProjects()
	res.send(projects)
})

router.get("/:id", async (req: Request, res: Response) => {
	const project = await getProject(+req.params.id)
	res.send(project)
})

router.post("/", async (req: Request, res: Response) => {
	const project = await createProject(req.body)
	res.send(project)
})

router.patch("/:id", async (req: Request, res: Response) => {
	const project = await updateProject(req.body, +req.params.id)
	res.send(project)
})

router.delete("/:id", async (req: Request, res: Response) => {
	const project = await removeProject(+req.params.id)
	res.send(project)
})

export default router
