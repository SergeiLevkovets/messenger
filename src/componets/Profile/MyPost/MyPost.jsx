import React from 'react';
import css from './MyPost.module.css';
import Post from "../Post/Post";

const MyPost = (props) => {

    let postsElements = props.posts.map(
        p => <Post message={p.message} like={p.likesCount}/>
    )

    return (
        <div className={css.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={css.post}>
                {postsElements}
            </div>
        </div>
    )

}

export default MyPost;