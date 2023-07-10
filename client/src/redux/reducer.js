import { GET_DOGS, GET_DOG_BY_ID } from "./action-types";

const inicialState = {
  dogs: [],
};

const rootReducer = (state = inicialState, action) => {
  switch (action.type) {
    case GET_DOGS:
      return { ...state, dogs: action.payload };
    case GET_DOG_BY_ID:
        return {...state}
    default:
      return { ...state };
  }
};

export default rootReducer;
