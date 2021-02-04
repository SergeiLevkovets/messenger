import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo isOwner={props.isOwner} {...props}/>
            <MyPostContainer />
        </div>
    )
}

export default Profile;