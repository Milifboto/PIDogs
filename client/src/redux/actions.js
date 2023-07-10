import axios from "axios";
import { GET_DOGS } from "./action-types";

export const getDogs = () => {
    return async function (dispatch) {
        const apiData = await axios.get(
            "https://api.thedogapi.com/v1/breeds"
        );
        const dogs = apiData.data;
        dispatch({type: GET_DOGS, payload: dogs});
    }
};

export const getDogByID = (id) => {
return async function(dispatch){
    const apiData = await axios.get(
        `https://api.thedogapi.com/v1/breeds/${id}`
    );
    const dog = apiData.data;
    dispatch({type: GET_DOG_BY_ID, payload: dog});
};
};