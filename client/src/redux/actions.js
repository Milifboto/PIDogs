import axios from "axios";
import {
  GET_DOGS,
  GET_TEMPERAMENTS,
  GET_DOGS_BY_NAME,
  ORDER,
  FILTER_TEMPERAMENTS,
  RESET,
  FILTER_ORIGIN,
} from "./action-types";
const URL = "http://localhost:3001";

export const getDogs = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${URL}/dogs`);
      const { data } = response;
      return dispatch({ type: GET_DOGS, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getDogByName = (name) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${URL}/dogs?name=${name}`);
      dispatch({ type: GET_DOGS_BY_NAME, payload: response.data });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getTemperaments = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${URL}/temperaments`);
      const temperaments = response.data?.map((temp) => ({
        id: temp.id,
        name: temp.name,
      }));
      return dispatch({ type: GET_TEMPERAMENTS, payload: temperaments });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export function orderedAlphabeticallyAndByWeight (order) {
  return { type: ORDER, payload: order };
}

export function reset() {
  return { type: RESET };
}

export const filterByTemperament = (value) => {
  return { type: FILTER_TEMPERAMENTS, payload: value };
};

export const filterByOrigin = (value) => {
  return { type: FILTER_ORIGIN, payload: value };
};
