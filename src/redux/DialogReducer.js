const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.text;
            break;
        case ADD_MESSAGE:
            let nextId = state.messages.length + 1;
            state.messages.push({
                id: nextId,
                message: state.newMessageText,
            });
            state.newMessageText = '';
            break;
    }

    return state;
}

export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, text: text})
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export default dialogsReducer;
