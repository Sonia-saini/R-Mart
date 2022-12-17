import {
  ERROR_STATE,
  LOADING_STATE,
  GET_DATA_SUCCESSFULLY,
  ADD_ITEM
} from "./actionTypes";

import axios from "axios";

export const getData = () => async (dispatch) => {
  dispatch({ type: LOADING_STATE });
  try {
    let response = await axios.get(
      "https://shines-node-deploy.onrender.com/products"
    );
    dispatch({ type: GET_DATA_SUCCESSFULLY, payload: response.data });
  } catch (error) {
    dispatch({ type: ERROR_STATE, payload: error.message });
  }
};
export const addtocart=(data)=>({
  type:ADD_ITEM,payload:data
})