const buy_cake = "buy_cake";


// first step is to create an action, which is an object that has type property
function buyCake() {
    return {
        type: buy_cake,
        info: "first redux action"
    }
}

/*
- Only one store for the whole application
- Responsibility:
 - Holds application state
 - Allows access to state via getState()
 - Allows state to be updated via dispatch(action)
 - Registers listeners via subscribe(listener)
 - Handles unregistering of listeners via the function returned by subscribe(listener)
*/


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