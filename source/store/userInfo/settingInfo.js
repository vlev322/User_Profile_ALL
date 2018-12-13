import { createStore } from "redux";

const initialState = [
  {
		pageName: "userList"
  }
];

export const store = createStore((state = initialState, action) => {
		switch (action.type) {
			case 'CREATE_USER':
				return "genParam";
				
			case 'SAVE_AND_CLOSE':
				return "userList";
				
			case 'SAVE':
				return state;
		}
		return state;
	});


	store.createUser = () => {
		store.dispatch({
			type: 'CREATE_USER',
			page: 'genParam'
		})
	}
	store.saveAndClose = () => {
		store.dispatch({
			type: 'SAVE_AND_CLOSE',
			page: 'userList'
		})
	}
	store.save = () => {		
		store.dispatch({
			type: 'SAVE'
		})
	}