// import redux from 'redux'
const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers;
// reduxLogger used to extend functionality to Redux
const reduxLogger = require('redux-logger')
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const buy_cake = "buy_cake";
const buy_icecream = "buy_icecream"


// first step is to create an action, which is an object that has type property
function buyCake() {
    return {
        type: buy_cake,
        info: "first redux action"
    }
}

function buyIceCream() {
    return {
        type: buy_icecream,
        info: "Add cake to the shelve"
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
// const initialState = {
//     numOfCakes: 10,
//     numOfIceCreams: 20
// }

// create a state for cake only
const initialCakeState = {
    numOfCakes: 10
}

// create a state for ice cream only
const initialIceCreamState = {
    numOfIceCreams: 20
}


// (previousState, action) => newState

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case buy_cake: return {
//             ...state,
//             numOfCakes: state.numOfCakes - 1
//         }
//         case buy_icecream: return {
//             ...state,
//             numOfIceCreams: state.numOfIceCreams - 1
//         }

//         default: return state
//     }
// }


const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case buy_cake: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case buy_icecream: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default: return state
    }
}

// create combinedReducer for icecream and cake called rootReducer
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

// redux store to hold application state
const store = createStore(rootReducer, applyMiddleware(logger))

console.log('Initial state', store.getState())

// to get the updated state

const unsubscribe = store.subscribe(() => { })

// to make change

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())

// final step is to ubsubscribe to the changes
unsubscribe()