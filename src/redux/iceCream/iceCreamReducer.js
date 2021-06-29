import { buy_iceCream } from "./iceCreamTypes"

const initialState = {
    numOfIceCream: 20
}

const iceCreamRudcer = (state = initialState, action) => {
    switch (action.type) {
        case buy_iceCream:
            return {
                ...state,
                numOfIceCream: state.numOfIceCream - 1
            }
        default:
            return {
                state
            }
    }
}

export default iceCreamRudcer