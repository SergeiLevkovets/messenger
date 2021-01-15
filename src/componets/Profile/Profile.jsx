import React from 'react';
import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPost} from "../../redux/State";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPost posts={props.state.posts}
                    newPostText={props.state.newPostText}
                    addPost={props.addPost}
                    updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}

export default Profile;