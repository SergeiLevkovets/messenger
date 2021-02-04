import React from 'react';
import css from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks";
import userPhoto from "../../../assets/userPhoto.png"



const ProfileInfo = ({profile, storeStatus, updateStatus, isOwner, savePhoto}) => {
    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    return (

        <div>
            <h4>ProfileInfo</h4>
            <ProfileStatusWithHooks storeStatus={storeStatus}
                                    updateStatus={updateStatus}/>
            <div className={css.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} className={css.mainFoto}/>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                <div>"aboutMe": {profile.aboutMe}</div>
                <div>"fullName": {profile.fullName}</div>
                <div>"userId": {profile.userId}</div>
            </div>
        </div>
    )
}

export default ProfileInfo;