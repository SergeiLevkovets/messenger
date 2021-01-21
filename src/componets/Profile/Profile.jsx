import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}
                         storeStatus={props.storeStatus}
                         updateStatus={props.updateStatus}/>
            <MyPostContainer />
        </div>
    )
}

export default Profile;