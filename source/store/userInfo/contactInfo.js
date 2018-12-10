import { createStore } from "redux";

const initialState = {
  editable: false,
  username: "",
  firstname: "",
  secondname: "",
  password: ""
};

export const store = createStore(reducer);

function reducer(state = initialState, action) {
  switch (action.type) {
    case "EDITTIG":
      const { type, ...rest } = action;
      return {
        ...state,
        ...rest
      };
  }
  return state;
}

export const setData = (dates) => {
	store.dispatch({
		type: 'EDITTIG',
		...dates
	})
}