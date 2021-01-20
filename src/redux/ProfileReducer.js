import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'Hi. how are you?', likesCount: 15},
        {id: 2, message: 'It\'s my first post in this messenger', likesCount: 100}
    ],
    newPostText: 'it-kamasutra.com',
    profile: null
}

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.text
            };
        }
        case ADD_POST: {
            let nextId = state.posts.length + 1;
            let text = state.newPostText;
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {id: nextId, message: text, likesCount: 0}]
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }
}

export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text})
export const addPost = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getUserById = (userId) => {
    return (dispatch) => {
        profileAPI.getUserById(userId).then(data => {
                dispatch(setUserProfile(data));
            }
        )
    }
}

export default profileReducer;
