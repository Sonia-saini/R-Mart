import { legacy_createStore, combineReducers,compose, applyMiddleware} from "redux"; 
import thunk from "redux-thunk"
import Reducer from "../sonia/SingleProduct/Reducer";

import { postReducer } from "./api/api.reducer";

//import {authReducer} from './auth/auth.reducer'


const rootReducer = combineReducers({
    postsManager : postReducer,
    data:Reducer
})
let composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store= legacy_createStore(rootReducer, composer(applyMiddleware(thunk)));
