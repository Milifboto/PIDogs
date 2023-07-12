import { GET_DOGS, GET_TEMPERAMENTS } from "./action-types";

const inicialState = {
  dogs: [],
  temperaments: [],
};

const rootReducer = (state = inicialState, action) => {
  switch (action.type) {
    case GET_DOGS:
      return { ...state, dogs: action.payload };
    case GET_TEMPERAMENTS:
      return {...state, temperaments: action.payload};
    default:
      return { ...state };
  }
};

export default rootReducer;
