import {
  LOADING_STATE,
  ERROR_STATE,
  GET_DATA_SUCCESSFULLY
} from "./actionTypes";

const initialState = {
  items: [],
  loading: false,
  error: false
};

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

    default: {
      return state;
    }
  }
};
