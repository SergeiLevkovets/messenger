const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
        if (action.type === ADD_POST) {
            let nextId = this._state.profilePage.posts.length + 1;
            this._state.profilePage.posts.push({id: nextId, message: this._state.profilePage.newPostText, likesCount: 0});
            this._state.profilePage.newPostText = '';
            this._subscriber();
        } else {
            if (action.type === UPDATE_NEW_POST_TEXT) {
                        this._state.profilePage.newPostText = action.text;
                        this._subscriber();
                    }
        }
    }
}

export const addPostActionCreator = () => {
    return {
        type : ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type : UPDATE_NEW_POST_TEXT,
        text: text
    }
}

export default store