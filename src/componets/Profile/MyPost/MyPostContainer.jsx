import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/ProfileReducer";
import MyPost from "./MyPost";
import StoreContext from "../../../StoreContext";

const MyPostContainer = (props) => {

    return (
        <StoreContext.Consumer>{
            (store) => {

                let state = store.getState();

                let newPostText = state.profilePage.newPostText;

                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                }

                let onPostChange = (text) => {
                    store.dispatch(updateNewPostTextActionCreator(text));
                }

                return (
                    <MyPost posts={state.profilePage.posts}
                            addPost={addPost}
                            onPostChange={onPostChange}
                            newPostText={newPostText}/>
                )
            }
        }</StoreContext.Consumer>
    )
}

export default MyPostContainer;
