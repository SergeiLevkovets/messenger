import React from 'react';
import css from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks";
import userPhoto from "../../../assets/userPhoto.png"
import ProfileDataReduxForm from "./ProfileDataForm";


const ProfileInfo = ({profile, editMode, storeStatus, updateStatus, isOwner, savePhoto, saveProfile, setEditMode}) => {


    const activateEditMode = () => {
        setEditMode(true);
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
        });
    }

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
            <ProfileStatusWithHooks storeStatus={storeStatus} updateStatus={updateStatus}/>
            <div className={css.descriptionBlock}>
                <div><img src={profile.photos.large || userPhoto} className={css.mainFoto}/></div>
                {isOwner && <div><input type={"file"} onChange={onMainPhotoSelected}/></div>}
                {editMode ? <ProfileDataReduxForm initialValues={profile} onSubmit={onSubmit}/> :
                    <ProfileData profile={profile} isOwner={isOwner} activateEditMode={activateEditMode}/>}
            </div>
        </div>
    )
}

const ProfileData = ({profile, isOwner, activateEditMode}) => {
    return <div>
        {isOwner && <div>
            <button onClick={activateEditMode}>edit profile</button>
        </div>}
        <div><b>My id: </b>{profile.userId}</div>
        <div><b>Full name: </b>{profile.fullName}</div>
        <div><b>About me: </b>{profile.aboutMe}</div>
        <div><b>Looking fora job: </b>{profile.lookingForAJob ? "yes" : "no"}</div>
        {profile.lookingForAJob && <div><b>My professional skills: </b>{profile.lookingForAJobDescription}</div>}
        <div><b>Contacts:</b></div>
        <div>{Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}</div>
    </div>
}

export const Contact = ({contactTitle, contactValue}) => {
    return <div className={css.contacts}>{contactTitle}: {contactValue}</div>
}

export default ProfileInfo;