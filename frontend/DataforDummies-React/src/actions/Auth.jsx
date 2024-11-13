import axios from 'axios'
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOAD_LOGIN_SUCCESS,
    LOAD_LOGIN_FAIL,
    AUTHENTICATED_SUCCESS,
    AUTHENTICATED_FAIL,
    LOGOUT
} from './types.jsx'
const apiURL = import.meta.env.VITE_API_URL;


export const checkAuthenticated = () => async dispatch => {
    if(localStorage.getItem('access')){
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        const body  = JSON.stringify({
            token: localStorage.getItem('access')
        })
        try{
            const res = axios.post(`${apiURL}/auth/jwt/verify`, body,config)
            if(res.data.code !== 'token_not_valid'){
                dispatch({
                    type: AUTHENTICATED_SUCCESS
                })
            } else {
                dispatch({
                    type: AUTHENTICATED_FAIL
                })
            }
        } catch(err){
            dispatch({
                type: AUTHENTICATED_FAIL
            })
        }
    } else {
        dispatch({
            type: AUTHENTICATED_FAIL
        })
    }
}


export const load_user = () => async dispatch => {
    if(localStorage.getItem('access')){
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        }

        try{
            const res = await axios.get(`${apiURL}/auth/users/me/`, body, config)
            dispatch({
                type: LOAD_LOGIN_SUCCESS,
                payload: res.data
            });
        } catch(err){
            dispatch({
                type: LOAD_LOGIN_FAIL,
            })
        }
    } else{
        dispatch({
            type: LOAD_LOGIN_FAIL
        })
    }
    
}

export const Login = (email, password) => async dispatch => {
    console.log('Login function called with:', email)
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({email, password})
    try {
        console.log('Attempting to log in...')
        const res = await axios.post(`${apiURL}/auth/jwt/create/`, body, config)
        console.log('Login successful:', res.data)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
        dispatch(load_user())
    } catch(err) {
        console.error('Login failed:', err)
        dispatch({
            type: LOGIN_FAIL,
        })
    }
}

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    })
}