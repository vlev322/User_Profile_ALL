import { createStore } from "redux";

const initialState = [
  {
    labelText: "Username",
    type: "text",
    placeholder: "Enter username",
    name: "username"
  },
  {
    labelText: "First Name",
    type: "text",
    placeholder: "Enter username",
    name: "firstname"
  },
  {
    labelText: "Second Name",
    type: "text",
    placeholder: "Enter Second Name",
    name: "secondname"
  },
  {
    labelText: "Password",
    type: "password",
    placeholder: "Enter password",
    name: "password"
  },
  {
    labelText: "Email",
    type: "email",
    placeholder: "example@mail.com",
    name: "email"
  },
  {
    labelText: "Telephone",
    type: "tel",
    placeholder: "Enter phone number",
    name: "phone"
  }
];

const initStoreField = (initState, myForm) => {
	console.log(myForm)
  const store = createStore((state = initState, action) => {
    const { type, ...newState } = action;
    return type === "CHANGE_VALUE" || type === "TOOGLE_DISABLE"
      ? {
          ...state,
          ...newState
        }
      : {
          ...state,
          value: "",
          readonly: true
        };
  });

  store.name = initState.name;

  store.changeValue = event => {
    store.dispatch({
      type: "CHANGE_VALUE",
      value: event.target.value
    });
  };
  store.toogleDisable = () => {
    store.dispatch({
      type: "TOOGLE_DISABLE",
      readonly: !store.getState().readonly
    });
	};
	
	myForm.subscribe(store.toogleDisable);

  return store;
};

const initStoreForm = () => {
  const store = createStore((state, action) => {
    return action.type === "TOOGLE_EDITABLE"
      ? {
					editable: !state.editable
        }
      : {
          editable: false
        };
  });
		let edit = false;
  store.toogleEditable = () => {		
		edit = !edit;
    store.dispatch({
      type: "TOOGLE_EDITABLE"
    });
  };
  return store;
};

const formStore = initStoreForm();

export const formPersonal = {
	store: formStore,
  field: [
		initStoreField(initialState[0], formStore),
		initStoreField(initialState[1], formStore),
		initStoreField(initialState[2], formStore),
		initStoreField(initialState[3], formStore)
	]
};

const s2 = initStoreForm();
export const formContact = {
	store: s2,
  field: [
		initStoreField(initialState[4], s2),
		initStoreField(initialState[5], s2)
	]
};