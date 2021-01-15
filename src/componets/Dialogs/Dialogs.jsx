import React from 'react';
import css from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsPages.dialogs.map(
        d => <DialogItem name={d.name} id={d.id}/>
    )

    let messagesElements = props.state.dialogsPages.messages.map(
        m => <Message message={m.message}/>
    )

    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={css.messages}>
                {messagesElements}
            </div>
        </div>
    )

}

export default Dialogs;