const {
	getSkill,
	getSkills,
	createSkill,
	updateSkill,
	removeSkill,
} = require("./utils")

const router = require("express").Router()

router.get("/", async (req, res) => {
	const skills = await getSkills()
	res.send(skills)
})

router.get("/:id", async (req, res) => {
	const skill = await getSkill(req.params.id)
	res.send(skill)
})

router.post("/", async (req, res) => {
	const { name, image_url, userID } = req.body
	const skill = await createSkill(name, image_url, userID)
	res.send(skill)
})

router.put("/:id", async (req, res) => {
	const skill = await updateSkill(req.body, req.params.id)
	res.send(skill)
})

router.delete("/:id", async (req, res) => {
	const skill = await removeSkill(req.params.id)
	res.send(skill)
})

module.exports = router
