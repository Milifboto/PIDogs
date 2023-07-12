import axios from "axios";
import { GET_DOGS, GET_TEMPERAMENTS } from "./action-types";
const URL_SERVER ="http://localhost:3001"
const URL_API_DOGS = "https://api.thedogapi.com/v1/breeds"

export const getDogs = () => {
    return async function (dispatch) {
        const response = await axios.get(URL_API_DOGS);
        const {data} = response;
        dispatch({type: GET_DOGS, payload: data});
    }
};

// export const getDogByID = (id) => {
// return async function(dispatch){
//     const apiData = await axios.get(
//         `https://api.thedogapi.com/v1/breeds/${id}`
//     );
//     const dog = apiData.data;
//     dispatch({type: GET_DOG_BY_ID, payload: dog});
// };
// };

export const getTemperaments = () => {
    return async function (dispatch) {
        const response = await axios.get(`${URL_SERVER}/temperaments`)
        const {data} = response;
        dispatch({type: GET_TEMPERAMENTS, payload: data})
    }
}