const redux = require('redux')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require(`redux-thunk`).default
const axios = require(`axios`)

// 1- create initial state
const initalState = {
    loading: false,
    users: [],
    error: ""
}

const fetch_users_request = 'fetch_users_request'
const fetch_users_success = 'fetch_users_success'
const fetch_users_failure = 'fetch_users_failure'

// 2-1 action creator
const fetchUsersRequest = () => {
    return {
        type: fetch_users_request
    }
}
// 2-3 action creator
const fetchUsersSuccess = users => {
    return {
        type: fetch_users_success,
        payload: users
    }
}
// 2-3 action creator
const fetchUsersFailure = error => {
    return {
        type: fetch_users_failure,
        payload: error

    }
}

// 3- define reducer function
const reducer = (state = initalState, action) => {
    switch (action.type) {
        case fetch_users_request:
            return {
                ...state, loading: true
            }
        case fetch_users_success:
            return {
                loading: false,
                users: action.payload,
                error: ""
            }

        case fetch_users_failure:
            return {
                loading: false,
                users: [],
                error: action.payload
            }

        default: return state

    }
}

// action creator
const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUsersRequest())
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(response => {
                // response.data
                const users = response.data.map(user => user.id)
                dispatch(fetchUsersSuccess(users))
            })
            .catch(error => {
                // error.message
                dispatch(fetchUsersFailure(error.message))
            })
    }
}
// appleMiddleware(thunkMiddleware) allows to retunr a function instead of action
const store = createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(() => { console.log(store.getState()) })
store.dispatch(fetchUsers())
