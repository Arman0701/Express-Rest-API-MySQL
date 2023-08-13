class Handler {
	constructor() {
		this._message = ""
	}

	User() {
		this._message += "User instance error."
		return this
	}

	Project() {
		this._message += "Project instance error."
		return this
	}

	Skill() {
		this._message += "Project instance error"
		return this
	}

	iD404() {
		this._message += " " + "'id' is undefined."
		return this
	}

	username404() {
		this._message += " " + "'username' is undefined."
		return this
	}

	email404() {
		this._message += " " + "'email' is undefined."
		return this
	}

	userID404() {
		this._message +=
			" " + "'userID' is undefined. User with given id doesn't exist."
		return this
	}

	body404() {
		this._message += " " + "'body' is undefined."
		return this
	}

	name404() {
		this._message += " " + "'name' is undefined."
		return this
	}

	imageURL404() {
		this._message += " " + "'image_url' is undefined."
		return this
	}

	description404() {
		this._message += " " + "'description' is undefined."
		return this
	}
}

const Error = new Handler()

export default Error
