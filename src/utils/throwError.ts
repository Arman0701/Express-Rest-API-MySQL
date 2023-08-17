export interface IHandler {}

class Handler {
	private message: string = ""

	constructor() {}
	
	User(): Handler {
		this.message += "User instance error."
		return this
	}
	Project(): Handler {
		this.message += "Project instance error."
		return this
	}
	Skill(): Handler {
		this.message += "Project instance error"
		return this
	}
	iD404(): Handler {
		this.message += " " + "'id' is undefined."
		return this
	}
	username404(): Handler {
		this.message += " " + "'username' is undefined."
		return this
	}
	email404(): Handler {
		this.message += " " + "'email' is undefined."
		return this
	}
	userID404(): Handler {
		this.message +=
			" " + "'userID' is undefined. User with given id doesn't exist."
		return this
	}
	body404(): Handler {
		this.message += " " + "'body' is undefined."
		return this
	}
	name404(): Handler {
		this.message += " " + "'name' is undefined."
		return this
	}
	imageURL404(): Handler {
		this.message += " " + "'image_url' is undefined."
		return this
	}
	description404(): Handler {
		this.message += " " + "'description' is undefined."
		return this
	}
}

const Error = new Handler()

export default Error
