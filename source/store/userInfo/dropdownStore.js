import { createStore } from "redux";

const initialState = {
		display: false,
		result: []
}

export const store = createStore((state = initialState, action) => {
		switch (action.type) {		
			
		case 'DISPLAY_LIST_ROLES':						
			return {
					...state,
					display: Boolean(action.result.length),
					result : action.result 
				};
		case 'DISPLAY_LIST':						
			return {
					...state,
					display: false,
					result: []
				};
		}
		return state;
	});


	let resp = ['hello', 'hemma', 'Adam', "Eva",'Evolution'];

	export const displayListRoles = (inp) => {			
		let result = [];	
			for(let i = 0; i < resp.length; i++){
				if(inp == resp[i].slice(0, inp.length)){
					result.push(resp[i])
				}		   
		};

		store.dispatch({
			type: 'DISPLAY_LIST_ROLES',
			result
		})
	}

	export const hide = () => {
		store.dispatch({
			type: 'DISPLAY_LIST',
		})
	}