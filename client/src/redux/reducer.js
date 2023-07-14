import {
  GET_DOGS,
  GET_TEMPERAMENTS,
  GET_DOGS_BY_NAME,
  ALPHABETICAL_ORDER,
  WEIGHT_ORDER,
  CREATE_DOG,
} from "./action-types";

const inicialState = {
  dogs: [],
  temperaments: [],
  copyDogs: [] //los filtros los hago sobre copydogs asi puedo encadenar filtros sobre los mismos perris
};

const rootReducer = (state = inicialState, action) => {
  switch (action.type) {
    case GET_DOGS:
      return { ...state, dogs: action.payload, copyDogs: action.payload};

    case GET_TEMPERAMENTS:
      return { ...state, temperaments: action.payload };

    case GET_DOGS_BY_NAME:
      return { ...state, dogs: action.payload };

    case CREATE_DOG: 
    return {...state}

    case ALPHABETICAL_ORDER:
      let ordered_alphabetically;
      if (action.payload === "A-Z") {
        ordered_alphabetically = state.dogs.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      } else {
        ordered_alphabetically = state.dogs.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      }
      return {
        ...state,
        dogs: [...ordered_alphabetically],
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
