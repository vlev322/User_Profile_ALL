import { createStore } from "redux";

const initialState = {
		user: ''
}

export const createUserStore = createStore((state = initialState, action) => {
		switch (action.type) {
			case 'CREATE_USER':	
				return {
						user: 'create'
					};						
		}
		return state;
	});

	
	createUserStore.createNewUser = () => {
		setTimeout(() => {
			createUserStore.dispatch({
				type: 'CREATE_USER'
			})			
		}, 100);
	}
