import { setData, getData } from './loginStore';

export function handleInput (e) {
	let { name, value } = e.currentTarget;
	let data = {
		...getData(),
		[name]: value 
	}
	setData(data)
};

export function handleSubmit(e) {
	e.preventDefault();
	const data  = getData();
	
	console.log('here We Send Data', data);
	alert(`${data.email}, ${data.password}`)
};