import {
  GET_DOGS,
  GET_TEMPERAMENTS,
  ORDER,
  RESET,
  FILTER_TEMPERAMENTS,
  FILTER_ORIGIN,
  GET_DOGS_BY_NAME,
  CURRENT_PAGE
} from "./action-types";

const inicialState = {
  dogs: [],
  temperaments: [],
  copyDogs: [], //los filtros los hago sobre copydogs asi puedo encadenar filtros sobre los mismos perris
  currentPage: 1,
};

const rootReducer = (state = inicialState, action) => {
  switch (action.type) {
    case GET_DOGS:
      return { ...state, dogs: action.payload, copyDogs: action.payload };

    case GET_TEMPERAMENTS:
      return { ...state, temperaments: action.payload };

    case GET_DOGS_BY_NAME:
        return {...state, copyDogs: action.payload};

    case FILTER_TEMPERAMENTS:
      // con la función some() verifico si alguno de sus temperamentos coincide con al menos uno de los temperamentos seleccionados.
      let filteredDogs = state.dogs?.filter((dog) => {
        return dog.temperament?.some((temp) => temp?.includes(action.payload));
      });
      return {
        ...state,
        copyDogs: filteredDogs,
      };

    case ORDER:
      let ordered;
      if (action.payload === "A-Z") {
        ordered = state.copyDogs.sort((a, b) => a.name.localeCompare(b.name));
      } else if (action.payload === "Z-A") {
        ordered = state.copyDogs.sort((a, b) => b.name.localeCompare(a.name));
      } else if (action.payload === "lighter to heavier") {
        ordered = state.copyDogs //filtro los valores null y desp ordeno
          .filter((dog) => dog.weight_min !== null)
          .sort((a, b) => a.weight_min - b.weight_min);
      } else {
        ordered = state.copyDogs
          .filter((dog) => dog.weight_min !== null)
          .sort((a, b) => b.weight_min - a.weight_min);
      }
      return {
        ...state,
        copyDogs: [...ordered],
      };

    case FILTER_ORIGIN:
      let filtered;
      if (action.payload === "New breeds"){
        filtered = state.dogs?.filter((dog) => dog.created === true);
      }else if (action.payload === "Breeds API") {
        filtered = state.dogs?.filter((dog) => dog.created === false);
      } else {
        filtered = state.dogs;
      }
      return {
        ...state,
        copyDogs: filtered,
      };

    case RESET:
      return {
        ...state,
        copyDogs: state.dogs,
      };

      case CURRENT_PAGE:
        return {
          ...state,
          currentPage: action.payload,
        }

    default:
      return { ...state };
  }
};

export default rootReducer;
