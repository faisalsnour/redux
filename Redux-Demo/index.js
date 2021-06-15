const buy_cake = "buy_cake";


// first step is to create an action, which is an object that has type property
function buyCake() {
    return {
        type: buy_cake,
        info: "first redux action"
    }
}

// this is state
const initialState = {
    numOfCakes: 10
}

// (previousState, action) => newState

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case buy_cake: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }


}