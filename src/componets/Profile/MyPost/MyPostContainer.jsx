import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/ProfileReducer";
import MyPost from "./MyPost";

const MyPostContainer = (props) => {

    let state = props.store.getState();

    let newPostText = state.profilePage.newPostText;

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }

    return (<MyPost posts={state.profilePage.posts}
                    addPost={addPost}
                    onPostChange={onPostChange}
                    newPostText={newPostText}/>)
}

export default MyPostContainer;
