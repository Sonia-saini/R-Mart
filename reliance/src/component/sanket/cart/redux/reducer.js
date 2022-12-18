import {
  LOADING_STATE,
  ERROR_STATE,
  GET_DATA_SUCCESSFULLY,
  ADD_ITEM
} from "./actionTypes";

const initialState = {
  items: JSON.parse(localStorage.getItem("cart-item")) || [],
  loading: false,
  error: false
};
let arr=[]
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_STATE: {
      return {
        ...state,
        loading: true
      };
    }

    case ERROR_STATE: {
      return {
        ...state,
        loading: false,
        error: true
      };
    }

    case GET_DATA_SUCCESSFULLY: {
      return {
        ...state,
        loading: false
      };
    }
    case ADD_ITEM: {
      arr.push(action.payload)
      return {
        ...state,
        loading: false
      };
    }

    default: {
      return state;
    }
  }
};
