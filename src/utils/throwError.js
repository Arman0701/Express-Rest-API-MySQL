const error = (err, response) => {
	if (err) {
		response.send(err)
		throw err
	}
}

const id = (id, res) => {
	if (!id) {
		res.send("Please, set the 'userID' query first.")
		throw new Error("Please, set the 'userID' query first.")
	}
}

const name = (name, res) => {
	if (!name) {
		res.send("Please, set the 'name' query first.")
		throw new Error("Please, set the 'name' query first.")
	}
}

const body = (body, res) => {
	if (!!!body) {
		res.send("Please, send the 'body' query also.")
		throw new Error("Please, send the 'body' query also.")
	}
}

const isUndefined = (rows, res) => {
	if (rows.length === 0) {
		res.send("Data is not found!")
	}
}

module.exports = { error, id, name, body, isUndefined }
