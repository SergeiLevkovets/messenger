import React from 'react';
import css from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div className={css.image}>

                <img src='https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg'/>
            </div>
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