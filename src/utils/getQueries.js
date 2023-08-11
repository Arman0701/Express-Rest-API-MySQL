const url = require("url")

const getQueries = (reqUrl) => {
	const parsedUrl = url.parse(reqUrl, true)
	return parsedUrl.query
}

module.exports = getQueries
