import axios from "axios";
import { setResponse } from './loginstore'

export function authorization(data) {
	try {
		getContent();
		const response = axios({
			method: "post",
			baseURL: api,
			url: "",
			params: {},
			headers: {},
			data
		});
		_responseHandle(response);
	} catch (err) {
		_exceptionHandle(err);
	}
}

function _responseHandle(response) {
	setResponse(response)
	console.log('SUCCESS', response)
	
	const data = typeof response.data === "string" ? JSON.parse(response.data) : response.data;
	if (!data.data) throw new Error("Error authorization");
	
	console.log(`Parsed data: ${response}`);
}

function _exceptionHandle(err) {


	
// function _exceptionHandle(err: AxiosError | Exception): void {
// 	if (err instanceof Exception) _CONTROLLER.exception(err);
// 	else if (err.response) {
// 		const { status, data } = err.response;
// 		_CONTROLLER.exception(new Exception({ code: ExceptionCode.SERVER_REJECT, params: [status, data] }));
// 	} else if (err.config)
// 		_CONTROLLER.exception(
// 			new Exception({ code: ExceptionCode.NO_NET_RESPONSE, params: [err.config.url || "undefined"] })
// 		);
// 	else _CONTROLLER.exception(new Exception({ code: ExceptionCode.UNHADNLED, err }));
// }
	//
	// setResponse(response)
	//
	if (err) throw new Error('We have some error: ', err);
}

