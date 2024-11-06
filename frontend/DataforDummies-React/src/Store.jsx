import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './reducers'
import { thunk } from 'redux-thunk'
const initialState = {}


const middleware = [thunk]
const store = configureStore({
    reducer:rootReducer,
    initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware)
})

export default store

