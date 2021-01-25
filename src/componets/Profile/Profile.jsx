import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo {...props}/>
            <MyPostContainer />
        </div>
    )
}

export default Profile;