import React from "react";
import {CreateField, Input, Textarea} from "../../common/formControl/FormControl";
import {reduxForm} from "redux-form";
import css from "./ProfileInfo.module.css";

const ProfileDataForm = ({initialValues, handleSubmit, error}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <button>Save</button>
        </div>
        {error && <div className={css.formSummaryError}>{error}</div>}
        <div><b>My id: </b>{initialValues.userId}</div>
        <div><b>Full name: </b>{CreateField("Full name", "fullName", [], Input)}</div>
        <div><b>About me: </b>{CreateField("About me", "aboutMe", [], Input)}</div>
        <div><b>Looking fora job: </b>{CreateField(null, 'lookingForAJob',
            [], Input, {type: 'checkbox'})}
        </div>
        <div><b>My professional skills: </b>{CreateField("My professional skills", "lookingForAJobDescription",
            [], Textarea)}
        </div>
        <div><b>Contacts:</b></div>
        <div>{Object.keys(initialValues.contacts).map(key => {
            return <ContactForm key={key} contactTitle={key}/>
        })}</div>

    </form>
}

export const ContactForm = ({contactTitle}) => {
    return <div className={css.contacts}>{contactTitle}: {CreateField(contactTitle, "contacts." + contactTitle, [], Input)}</div>
}


const ProfileDataReduxForm = reduxForm({
    form: 'profileDataForm'
})(ProfileDataForm)

export default ProfileDataReduxForm;
