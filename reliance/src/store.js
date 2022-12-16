import {
  combineReducers,
  compose,
  legacy_createStore,
  applyMiddleware
} from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./component/sanket/cart/redux/reducer";

const rootRouter = combineReducers({
  cart: cartReducer
});

const compoeseEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(
  rootRouter,
  compoeseEnhancer(applyMiddleware(thunk))
);
