import React from 'react';
import css from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    addMessageActionCreator,
    addPostActionCreator,
    updateNewMessageTextActionCreator,
    updateNewPostTextActionCreator
} from "../../redux/State";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsPages.dialogs.map(
        d => <DialogItem name={d.name} id={d.id}/>
    )

    let messagesElements = props.state.dialogsPages.messages.map(
        m => <Message message={m.message}/>
    )

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewMessageTextActionCreator(text));

    }

    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={css.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea placeholder='enter your message'
                                   value={props.state.dialogsPages.newMessageText}
                                   onChange={onMessageChange}/></div>
                    <div><button onClick={addMessage}>send</button></div>
                </div>
            </div>
        </div>
    )

}

export default Dialogs;