import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'Hi. how are you?', likesCount: 15},
        {id: 2, message: 'It\'s my first post in this messenger', likesCount: 100}
    ],
    profile: null,
    status: ''
}

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST: {
            let nextId = state.posts.length + 1;
            let text = action.message;
            return {
                ...state,
                posts: [...state.posts, {id: nextId, message: text, likesCount: 0}]
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status ? action.status : ''}
        }
        default:
            return state
    }
}

export const addPost = (message) => ({type: ADD_POST, message})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getUserById = (userId) => {
    return (dispatch) => {
        profileAPI.getUserById(userId).then(data => {
                dispatch(setUserProfile(data));
            }
        )
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
                    dispatch(setStatus(response));
            }
        )
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
                if (response.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            }
        )
    }
}


export default profileReducer;
