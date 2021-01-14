import React from 'react';
import css from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={css.image}>
                <img src='https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg'/>
            </div>
            <div className={css.descriptionBlock}>
                <img src='https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/IMG_Academy_Logo.svg/1200px-IMG_Academy_Logo.svg.png'/>ava+description
            </div>
        </div>
    )
}

export default ProfileInfo;