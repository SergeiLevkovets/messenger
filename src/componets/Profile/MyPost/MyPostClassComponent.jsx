import React from 'react';
import css from './MyPost.module.css';
import Post from "../Post/Post";
import {reduxForm} from "redux-form";
import AddMessageForm from "../../common/formControl/AddMessageForm";

class MyPost extends React.PureComponent {


    /*
        shouldComponentUpdate(nextProps, nextState, nextContext) {
            return nextProps != this.props || nextState != this.state
        }
    */
    render() {

        let postsElements = this.props.posts.map(
            p => <Post message={p.message} like={p.likesCount}/>
        )

        let addNewMessage = (values) => {
            this.props.addPost(values.newMessageBody)
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
    }
}

const AddMessageFormRedux = reduxForm({
    form: 'profileAddMessageForm'
})(AddMessageForm)

export default MyPost;