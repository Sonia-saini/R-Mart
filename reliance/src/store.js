import {
  combineReducers,
  compose,
  legacy_createStore,
  applyMiddleware
} from "redux";
import thunk from "redux-thunk";
import { postReducer } from "./component/mitali/api/api.reducer";
import { cartReducer } from "./component/sanket/cart/redux/reducer";
import Reducer from "./component/sonia/SingleProduct/Reducer";

const rootRouter = combineReducers({
  cart: cartReducer,
  postsManager : postReducer,
  data:Reducer
});

const compoeseEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(
  rootRouter,
  compoeseEnhancer(applyMiddleware(thunk))
);
