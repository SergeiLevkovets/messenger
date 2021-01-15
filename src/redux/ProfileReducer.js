const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

export const profileReducer = (state, action) => {

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

export default profileReducer;