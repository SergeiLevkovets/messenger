let renderEntireThree = () => {
    console.log('State changed');
}

let state = {
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
}

export const addPost = () => {
    let posts = state.profilePage.posts;
    let nextId = posts.length + 1;
    posts.push({id: nextId, message: state.profilePage.newPostText, likesCount: 0})
    state.profilePage.newPostText = '';
    renderEntireThree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireThree(state);
}

export const subscribe = (observer) => {
    renderEntireThree = observer;
}

export default state