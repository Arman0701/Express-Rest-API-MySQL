const {
	getUsers,
	getUser,
	createUser,
	removeUser,
	updateUser,
	getUserProjects,
	getUserSkills,
} = require("./utils")

const router = require("express").Router()

router.get("/", async (req, res) => {
	const user = await getUsers()
	res.send(user)
})

router.get("/:id", async (req, res) => {
	const user = await getUser(req.params.id)
	res.send(user)
})

router.get("/:id/projects", async (req, res) => {
	const projects = await getUserProjects(req.params.id)
	res.send(projects)
})

router.get("/:id/skills", async (req, res) => {
	const projects = await getUserSkills(req.params.id)
	res.send(projects)
})

router.post("/", async (req, res) => {
	const { username, email } = req.body

	const result = await createUser(username, email)
	res.send(result)
})

router.patch("/:id", async (req, res) => {
	const user = await updateUser(req.body, req.params.id)
	res.send(user)
})

router.delete("/:id", async (req, res) => {
	const user = await removeUser(req.params.id)
	res.send(user)
})

module.exports = router
