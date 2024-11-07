import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOAD_LOGIN_SUCCESS,
    LOAD_LOGIN_FAIL
} from '../actions/types.jsx'

const initialState = {
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    isAuthenticated: null,
    user: null
}
export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('access', payload.access)
            return {
                ...state,
                isAuthenticated: true,
                access: payload.access,
                refresh: payload.refresh

            }
        case LOAD_LOGIN_SUCCESS:
            return{
                ...state,
                user: payload
            }
        case LOAD_LOGIN_FAIL:
            return{
                ...state,
                user: null
            }
        case LOGIN_FAIL:
            localStorage.removeItem('access')
            localStorage.removeItem('refresh')
            return {
                ...state,
                isAuthenticated: false,
                access: null,
                refresh: null
            }
        default:
            return state;
    }
}