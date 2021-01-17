const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: 'Sergei'},
        {id: 2, name: 'Dimych'},
        {id: 3, name: 'Andrei'},
        {id: 4, name: 'Sergei'},
    ],
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Yo'},
        {id: 3, message: 'Hi'},
        {id: 4, message: 'How are you?'},
    ],
    newMessageText: '',
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.text
            };
        }
        case ADD_MESSAGE: {
            let nextId = state.messages.length + 1;
            let text = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: nextId, message: text}]
            };
        }
        default:
            return state;
    }
}

export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, text: text})
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export default dialogsReducer;
