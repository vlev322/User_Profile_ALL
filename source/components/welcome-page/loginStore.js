let loginData = {
	email: '',
	password: ''
}

let responseData = {
	exception: '',
	message: '',
}

export function responseController() {
	getResponse().exception === 200 ? '' : setResponse('Login faild. Please try again')
}

export function getData() {
	return loginData;
}

export function getResponse() {
	return responseData;
}

export function setData(data) {
	loginData = data;
}

export function setResponse(value) {
	let data = {
		...getResponse(),
		message: value 
	}
	responseData = data;
}