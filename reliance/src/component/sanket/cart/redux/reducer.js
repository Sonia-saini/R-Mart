import {
  LOADING_STATE,
  ERROR_STATE,
  GET_DATA_SUCCESSFULLY,
  ADD_ITEM
} from "./actionTypes";

const initialState = {
  items: [],
  loading: false,
  error: false
};
let arr=[]
export const cartReducer = (state = initialState, action) => {

  switch (action.type) {
    // Wirte down the cases
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
        error: action.payload || true
      };
    }

    case GET_DATA_SUCCESSFULLY: {
      return {
        ...state,
        loading: false,
        items: action.payload
      };
    }
    case ADD_ITEM:{
      arr.push(action.payload)
      localStorage.setItem("cartitem",JSON.stringify(arr))
      return {
        ...state,
        loading: false,
        items:[...state.items,action.payload]
      }
    }

    default: {
      return state;
    }
  }
};
