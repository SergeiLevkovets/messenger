const ADD_MESSAGE = 'ADD_MESSAGE';

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
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_MESSAGE: {
            let nextId = state.messages.length + 1;
            let text = action.text;
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
export const addMessage = (text) => ({type: ADD_MESSAGE, text})

export default dialogsReducer;
