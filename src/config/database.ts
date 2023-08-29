import mysql from "mysql2/promise"

const db = mysql.createPool({
	host: process.env.DB_HOST,
	port: Number(process.env.DB_PORT),
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
})

const userTableQuery: string = `
    CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT NOT NULL UNIQUE,
        username VARCHAR(50) NOT NULL UNIQUE,
        email VARCHAR(100) NOT NULL UNIQUE,

		PRIMARY KEY (id)
    )
`

const projectTableQuery: string = `
	CREATE TABLE IF NOT EXISTS projects (
		id INT AUTO_INCREMENT NOT NULL UNIQUE,
		name VARCHAR(50) NOT NULL,
		description VARCHAR(50) NOT NULL,
		userID INT NOT NULL,

		PRIMARY KEY (id),
		FOREIGN KEY (userID) REFERENCES users(id)
	)
`

const skillTableQuery: string = `
	CREATE TABLE IF NOT EXISTS skills (
		id INT AUTO_INCREMENT NOT NULL UNIQUE,
		name VARCHAR(50) NOT NULL,
		image_url TEXT NOT NULL,
		userID INT NOT NULL,

		PRIMARY KEY (id),
		FOREIGN KEY (userID) REFERENCES users(id)
	)
`

const init = async () => {
	try {
		await db.query("CREATE DATABASE IF NOT EXISTS simpledb")
		await db.query("USE simpledb")
		await db.query(userTableQuery)
		await db.query(projectTableQuery)
		await db.query(skillTableQuery)
	} catch (err) {
		console.error(err)
	}
}

init()

export default db
