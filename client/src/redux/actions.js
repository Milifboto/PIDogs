import axios from "axios";
import {
  GET_DOGS,
  GET_TEMPERAMENTS,
  GET_DOGS_BY_NAME,
  ALPHABETICAL_ORDER,
  CREATE_DOG,
  GET_DOG_DETAIL
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
      const response = await axios.get(`${URL}/dogs?name=${name}`);
       dispatch({ type: GET_DOGS_BY_NAME, payload: response.data });
  };
};

export const createDog = (form) =>  {
  return async function (dispatch) {
    const postDog = await axios.post(`${URL}/dogs`, form);
    dispatch({type: CREATE_DOG, payload: postDog.data});
  };
};

export const getDogDetail = (id) => {
    return async function (dispatch) {
        try {
            const response = await axios.get(`${URL}/dogs/${id}`);
            return dispatch({type: GET_DOG_DETAIL, payload: response.data})
        } catch (error) {
            console.log(error.message)
        }
    }
}

export const getTemperaments = () => {
  const endpoint = `${URL}/temperaments`;
  return async function (dispatch) {
    try {
      const response = await axios.get(endpoint);
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

export function orderedAlphabetically(order) {
  return {
    type: ALPHABETICAL_ORDER,
    payload: order,
  };
}

export function orderedByWeight(order) {
  return {
    type: WEIGHT_ORDER,
    payload: order,
  };
}
