import { Request, Response } from "express"
import { users } from "../services/UserService"

import { Pagination } from "../utils/paginate"

import express from "express"
const router = express.Router()

router.get("/", async (req: Request, res: Response) => {
	let user = await users.getAll()
	const q = req.query

	const emptyQueries = Object.keys(q).length === 0
	if (!emptyQueries) {
		user = new Pagination(user).paginate(q)
	}

	res.send(user)
})

router.get("/:id", async (req: Request, res: Response) => {
	const user = await users.getOneById(+req.params.id)
	res.send(user)
})

router.get("/:id/projects", async (req: Request, res: Response) => {
	const projects = await users.getProjectsByUserId(+req.params.id)
	res.send(projects)
})

router.get("/:id/skills", async (req: Request, res: Response) => {
	const projects = await users.getSkillsByUserId(+req.params.id)
	res.send(projects)
})

router.post("/", async (req: Request, res: Response) => {
	const result = await users.create(req.body)
	res.send(result)
})

router.patch("/:id", async (req: Request, res: Response) => {
	const user = await users.updateById(req.body, +req.params.id)
	res.send(user)
})

router.delete("/:id", async (req: Request, res: Response) => {
	const user = await users.removeById(+req.params.id)
	res.send(user)
})

export default router
