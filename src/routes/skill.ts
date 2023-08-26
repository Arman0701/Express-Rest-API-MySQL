import { Request, Response } from "express"
import { skills } from "../services/SkillService"

import express from "express"
const router = express.Router()

router.get("/", async (req: Request, res: Response) => {
	const skillsData = await skills.getAll()
	res.send(skillsData)
})

router.get("/:id", async (req: Request, res: Response) => {
	const skill = await skills.getOneById(+req.params.id)
	res.send(skill)
})

router.post("/", async (req: Request, res: Response) => {
	const skill = await skills.create(req.body)
	res.send(skill)
})

router.patch("/:id", async (req: Request, res: Response) => {
	const skill = await skills.updateById(req.body, +req.params.id)
	res.send(skill)
})

router.delete("/:id", async (req: Request, res: Response) => {
	const skill = await skills.removeById(+req.params.id)
	res.send(skill)
})

export default router
