// import redux from 'redux'

const redux = require('redux')
const createStore = redux.createStore

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
 1 - Holds application state
 2 - Allows access to state via getState()
 3 - Allows state to be updated via dispatch(action)
 4 - Registers listeners via subscribe(listener)
 5 - Handles unregistering of listeners via the function returned by subscribe(listener)
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

// redux store to hold application state
const store = createStore(reducer)

console.log('Initial state', store.getState())

// to get the updated state

const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))

// to make change

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

unsubscribe()