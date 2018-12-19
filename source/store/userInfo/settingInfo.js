import { createStore } from "redux";

const initialState = {
		pageName: "userList",
		list: []
}

export const store = createStore((state = initialState, action) => {
		switch (action.type) {

			case 'CREATE_USER':
				return { 
					...state,
					pageName: state.pageName = "genParam"
				};

			case 'EDIT_USER':
				return { 
					...state,
					pageName: state.pageName = "genParam"
				};
				
			case 'BACK':
				return { 
					...state,
					pageName: state.pageName = "userList"
				};
				
			case 'SAVE':
				return state;

			case 'SELECT_USER':				
			return {
					...state,
					list: 
						state.list.indexOf(action.id) == -1 ? // Проверка на то, есть ли такой элемент в массиве
						state.list.concat([	action.id	]): // Если есть то добавляем к существующему							 
						state.list.indexOf(action.id) >= 0 ? // При повторном нажатии, поверка на то, есть ли такой єлемент в массиве
						state.list.filter(el => el !== action.id):	// Если есть то удаляем его из массива
						[]		
				};

			case 'DELETE_USER':							
			return {
					...state,
					deleteUser: true
				};
		}
		return state;
	});


	store.createUser = () => {
		store.dispatch({
			type: 'CREATE_USER',
			page: 'genParam'
		})
	}
	store.editUser = () => {
		store.dispatch({
			type: 'EDIT_USER',
			page: 'genParam'
		})
	}
	store.back = () => {
		store.dispatch({
			type: 'BACK',
			page: 'userList'
		})
	}
	store.save = () => {		
		store.dispatch({
			type: 'SAVE'
		})
	}

//---> Operations Select, Delete 
	// Select User
	store.selectUser = (id) => {	
		store.dispatch({
			type: 'SELECT_USER',
			id
		})
	}
	// Delete User
	store.deleteUser = () => {		
		store.dispatch({
			type: 'DELETE_USER'
		})
	}