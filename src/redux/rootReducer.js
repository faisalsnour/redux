import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";

const rootReducer = combineReducers({
    iceCream: iceCreamReducer,
    cake: cakeReducer
})

export default rootReducer