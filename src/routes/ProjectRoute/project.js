import {
	getProject,
	getProjects,
	createProject,
	updateProject,
	removeProject,
} from "./utils/index.js"

import express from "express"
const router = express.Router()

router.get("/", async (req, res) => {
	const projects = await getProjects()
	res.send(projects)
})

router.get("/:id", async (req, res) => {
	const project = await getProject(req.params.id)
	res.send(project)
})

router.post("/", async (req, res) => {
	const { name, description, userID } = req.body
	const project = await createProject(name, description, userID)
	res.send(project)
})

router.patch("/:id", async (req, res) => {
	const project = await updateProject(req.body, req.params.id)
	res.send(project)
})

router.delete("/:id", async (req, res) => {
	const project = await removeProject(req.params.id)
	res.send(project)
})

export default router
