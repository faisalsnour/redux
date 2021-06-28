const redux = require('redux')
const createStore = redux.createStore

// 1- create initial state
const initalState = {
    loading: false,
    users: [],
    error: ""
}

const fetch_users_request = 'fetch_users_request'
const fetch_users_success = 'fetch_users_success'
const fetch_users_failure = 'fetch_users_failure'

// 2- action creator
const fetchUsersRequest = () => {
    return {
        type: fetch_users_request
    }
}

const fetchUsersSuccess = users => {
    return {
        type: fetch_users_success,
        payload: users
    }
}

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

const store = createStore(reducer)