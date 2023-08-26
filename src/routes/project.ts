import { Request, Response } from "express"
import { projects } from "../services/ProjectService"

import express from "express"
const router = express.Router()

router.get("/", async (req: Request, res: Response) => {
	const projectsData = await projects.getAll()
	res.send(projectsData)
})

router.get("/:id", async (req: Request, res: Response) => {
	const project = await projects.getOneById(+req.params.id)
	res.send(project)
})

router.post("/", async (req: Request, res: Response) => {
	const project = await projects.create(req.body)
	res.send(project)
})

router.patch("/:id", async (req: Request, res: Response) => {
	const project = await projects.updateById(req.body, +req.params.id)
	res.send(project)
})

router.delete("/:id", async (req: Request, res: Response) => {
	const project = await projects.removeById(+req.params.id)
	res.send(project)
})

export default router
