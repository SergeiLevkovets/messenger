import React from 'react';
import css from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {reduxForm} from "redux-form";
import AddMessageForm from "../common/formControl/AddMessageForm";

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(
        d => <DialogItem name={d.name} id={d.id}/>
    )

    let messagesElements = props.messages.map(
        m => <Message message={m.message}/>
    )

    let addMessage = (values) => {
        props.addMessage(values.newMessageBody);
    }

    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={css.messages}>
                <div>{messagesElements}</div>

                <AddMessageFormRedux onSubmit={addMessage}/>

            </div>
        </div>
    )

}

const AddMessageFormRedux = reduxForm({
    form: 'dialogsAddMessageForm'
})(AddMessageForm)

export default Dialogs;