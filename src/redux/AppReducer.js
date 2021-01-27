import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {authMe} from "./AuthReducer";

const SET_INITIALIZED = 'SET_INITIALIZED';

let initialState = {
    initialized: false
}

export const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_INITIALIZED: {
            return {
                ...state,
                initialized: true
            };
        }
        default:
            return state
    }
}

export const initializedSuccess = () => ({type: SET_INITIALIZED})

export const initializeApp = () => {

    return (dispatch) => {
        let promise = dispatch(authMe())
        promise.then(() => {
                dispatch(initializedSuccess())
        })
    }
}

export default appReducer;
