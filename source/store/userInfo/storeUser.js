import { createStore } from "redux";

const initialState = {
		user: ''
}

export const userStore = createStore((state = initialState, action) => {
		switch (action.type) {

			case 'CHOOSE_USER':				
			return {
					...state,
					user: action.id
				};						
		}
		return state;
	});

	// Select User
	userStore.chooseUser = (id) => {		
		userStore.dispatch({
			type: 'CHOOSE_USER',
			id
		})
	}
