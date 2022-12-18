import { GET_DATA_SUCCESSFULLY, ADD_ITEM } from "./actionTypes";

export const getData = () => (dispatch) => {
  dispatch({ type: GET_DATA_SUCCESSFULLY });
};

export const addtocart = (data) => {
  let response = JSON.parse(localStorage.getItem("cart-item")) || [];
  let isMatch = false;

  response.map((item) => {
    if (item.name === data.name) {
      return (isMatch = true);
    }
  });

  if (!isMatch) {
    response.push(data);
    localStorage.setItem("cart-item", JSON.stringify(response));
   
    
    return { type: ADD_ITEM };
  }
};
