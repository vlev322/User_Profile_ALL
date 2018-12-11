import { createStore } from "redux";

const initialState = {
  btnChange: false,
  user: {}
};

function createUser(state = initialState, action) {
  switch (action.type) {
    case "SAVE_BTN":
      // const { type, ...rest } = action;
      return {
        ...state,
        ...rest
      };
    case "SAVE_DATA_USER":
			// const { type, ...rest } = action;
			
      return {
        ...state,
        ...rest
      };
  }
  return state;
}

const store = createStore(createUser);

export default store;