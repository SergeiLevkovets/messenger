import React from 'react';
import css from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks";


const ProfileInfo = ({profile, storeStatus, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (

        <div>
            <h4>ProfileInfo</h4>
            <ProfileStatusWithHooks storeStatus={storeStatus}
                                    updateStatus={updateStatus}/>
            <div className={css.descriptionBlock}>
                <img src={profile.photos.large}/>
                <div>"aboutMe": {profile.aboutMe}</div>
                <div>"fullName": {profile.fullName}</div>
                <div>"userId": {profile.userId}</div>
            </div>
        </div>
    )
}

export default ProfileInfo;