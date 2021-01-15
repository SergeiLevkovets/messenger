import dialogsReducer from "./DialogReducer";
import profileReducer from "./ProfileReducer";

let store = {

    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi. how are you?', likesCount: 15},
                {id: 2, message: 'It\'s my first post in this messenger', likesCount: 100}
            ],
            newPostText: 'it-kamasutra.com'

        },
        dialogsPages: {
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
    },

    _subscriber() {
        console.log('no subscribers (observers)');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._subscriber = observer
    },

    dispatch(action) {

        this._state.dialogsPages = dialogsReducer(this._state.dialogsPages, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);

        this._subscriber();
    }
}

export default store