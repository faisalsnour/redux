import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamRudcer from "./iceCream/iceCreamReducer";

const rootReducer = combineReducers({
    iceCream: iceCreamRudcer,
    cake: cakeReducer
})

export default rootReducer