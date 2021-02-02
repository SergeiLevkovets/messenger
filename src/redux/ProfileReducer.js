import {profileAPI} from "../api/api";

const ADD_POST = 'profile/ADD_POST';
const DELETE_POST = 'profile/DELETE_POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';

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
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id != action.id)}
        }
        default:
            return state
    }
}

export const addPost = (message) => ({type: ADD_POST, message})
export const deletePost = (id) => ({type: DELETE_POST, id})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getUserById = (userId) => async (dispatch) => {
    let response = await profileAPI.getUserById(userId);
    dispatch(setUserProfile(response.data));
}


export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}


export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export default profileReducer;
