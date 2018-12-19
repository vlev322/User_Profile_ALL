import { createStore } from "redux";

const initialState = {
		del: false
}

export const deleted = createStore((state = initialState, action) => {
		switch (action.type) {		
			
		case 'DELETED':						
			return {
					...state,
					del: true
				};
		}
		return state;
	});

	deleted.deleted = (obj) => {		
		deleted.dispatch({
			type: 'DELETED',
			obj
		})
	}