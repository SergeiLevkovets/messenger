import React from 'react';
import css from './MyPost.module.css';
import Post from "../Post/Post";

const MyPost = (props) => {
debugger
    let postsElements = props.posts.map(
        p => <Post message={p.message} like={p.likesCount}/>
    )

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        debugger
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={css.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={css.post}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPost;