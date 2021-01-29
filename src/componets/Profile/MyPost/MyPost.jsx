import React from 'react';
import css from './MyPost.module.css';
import Post from "../Post/Post";
import {Field, reduxForm} from "redux-form";
import AddMessageForm from "../../common/newMessageForm/AddMessageForm";

const MyPost = React.memo((props) => {
    let postsElements = props.posts.map(
        p => <Post message={p.message} like={p.likesCount}/>
    )

    let addNewMessage = (values) => {
        props.addPost(values.newMessageBody)
    }

    return (
        <div className={css.postsBlock}>
            <h3>My post</h3>

            <AddMessageFormRedux onSubmit={addNewMessage}/>

            <div className={css.post}>
                {postsElements}
            </div>
        </div>
    )
})

const AddMessageFormRedux = reduxForm({
    form: 'profileAddMessageForm'
})(AddMessageForm)

export default MyPost;