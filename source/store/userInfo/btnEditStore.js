import { createStore } from "redux";

const initialState = {
		edit: false
}

export const btnEditStore = createStore((state = initialState, action) => {
		switch (action.type) {

			case 'BTN_EDIT_USER':			
			return {
					...state,
					edit : action.edit
				};						
			case 'BTN_EDIT_USER_SHOW':			
			return {
					...state,
					edit : action.edit
				};						
		}
		return state;
	});

	// Edit User
	btnEditStore.btnEdit = () => {		
		btnEditStore.dispatch({
			type: 'BTN_EDIT_USER',
			edit: true
		})
	}
	btnEditStore.btnEditShow = () => {		
		btnEditStore.dispatch({
			type: 'BTN_EDIT_USER_SHOW',
			edit: false
		})
	}
