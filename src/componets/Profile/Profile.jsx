import React from 'react';
import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPost} from "../../redux/Store";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPost posts={props.state.profilePage.posts}
                    newPostText={props.state.profilePage.newPostText}
                    dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;