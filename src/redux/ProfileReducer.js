const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hi. how are you?', likesCount: 15},
        {id: 2, message: 'It\'s my first post in this messenger', likesCount: 100}
    ],
    newPostText: 'it-kamasutra.com'
}

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let nextId = state.posts.length + 1;
            state.posts.push({
                id: nextId,
                message: state.newPostText,
                likesCount: 0
            });
            state.newPostText = '';
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text;
            break;
    }

    return state;
}

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text})
export const addPostActionCreator = () => ({type: ADD_POST})

export default profileReducer;
