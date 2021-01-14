import React from 'react';
import css from './Post.module.css';

const Post = (props) => {
    return (
        <div className={css.post}>
            <img src='https://www.meme-arsenal.com/memes/8ab5fe07681cd172915e9472a0a8443d.jpg'/>
            <div>
                {props.message}
            </div>
            <span>Like {props.like}</span>
        </div>
    )

}

export default Post;