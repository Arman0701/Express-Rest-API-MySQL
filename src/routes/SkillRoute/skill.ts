import {Request, Response} from "express"

import {
	getSkill,
	getSkills,
	createSkill,
	updateSkill,
	removeSkill,
} from "./utils/index.js"

import express from "express"
const router = express.Router()

router.get("/", async (req: Request, res: Response) => {
	const skills = await getSkills()
	res.send(skills)
})

router.get("/:id", async (req: Request, res: Response) => {
	const skill = await getSkill(+req.params.id)
	res.send(skill)
})

router.post("/", async (req: Request, res: Response) => {
	const { name, image_url, userID } = req.body
	const skill = await createSkill(name, image_url, userID)
	res.send(skill)
})

router.patch("/:id", async (req: Request, res: Response) => {
	const skill = await updateSkill(req.body, +req.params.id)
	res.send(skill)
})

router.delete("/:id", async (req: Request, res: Response) => {
	const skill = await removeSkill(+req.params.id)
	res.send(skill)
})

export default router
