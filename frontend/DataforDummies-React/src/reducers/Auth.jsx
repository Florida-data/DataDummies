import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOAD_LOGIN_SUCCESS,
    LOAD_LOGIN_FAIL,
    AUTHENTICATED_SUCCESS,
    AUTHENTICATED_FAIL,
    LOGOUT
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
        case AUTHENTICATED_SUCCESS:
            return{
                ...state,
                isAuthenticated: true
            }
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
        case AUTHENTICATED_FAIL:
            return{
                ...state,
                isAuthenticated: false 
            }
        case LOAD_LOGIN_FAIL:
            return{
                ...state,
                user: null
            }
        
            
        case LOGIN_FAIL:
        case LOGOUT:
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