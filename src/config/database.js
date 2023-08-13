const { createPool } = require("mysql2")

const db = createPool({
	host: process.env.HOST,
	port: process.env.PORT,
	user: process.env.USER,
	password: process.env.PASSWORD,
}).promise()

const createUserTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
        id INT PRIMARY KEY AUTO_INCREMENT,
        username VARCHAR(50),
        email VARCHAR(100)
    )
`

const createProjectTableQuery = `
	CREATE TABLE IF NOT EXISTS projects (
		id INT PRIMARY KEY AUTO_INCREMENT,
		name VARCHAR(50),
		description VARCHAR(50),
		userID INT
	)
`

const createSkillTableQuery = `
	CREATE TABLE IF NOT EXISTS skills (
		id INT PRIMARY KEY AUTO_INCREMENT,
		name VARCHAR(50),
		image_url TEXT,
		userID INT
	)
`

const init = async () => {
	try {
		await db.query("CREATE DATABASE IF NOT EXISTS simpledb")
		await db.query("USE simpledb")
		await db.query(createUserTableQuery)
		await db.query(createProjectTableQuery)
		await db.query(createSkillTableQuery)
	} catch (err) {
		console.error(err)
	}
}

init()

module.exports = db
