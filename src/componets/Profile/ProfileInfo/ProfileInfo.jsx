import React from 'react';
import css from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "../ProfileStatus/ProfileStatus";



const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }
    return (

        <div>
            <h4>ProfileInfo</h4>
            <ProfileStatus storeStatus={props.storeStatus}
                           updateStatus={props.updateStatus} />
            <div className={css.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <div>"aboutMe": {props.profile.aboutMe}</div>
                <div>"fullName": {props.profile.fullName}</div>
                <div>"userId": {props.profile.userId}</div>
            </div>
        </div>
    )
}

export default ProfileInfo;