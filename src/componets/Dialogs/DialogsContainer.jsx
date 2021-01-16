import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/DialogReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {

    return (
        <StoreContext.Consumer>{
            (store) => {

                let state = store.getState();

                let addMessage = () => {
                    store.dispatch(addMessageActionCreator());
                }

                let onMessageChange = (text) => {
                    store.dispatch(updateNewMessageTextActionCreator(text));
                }

                return (
                    <Dialogs dialogs={state.dialogsPage.dialogs}
                             messages={state.dialogsPage.messages}
                             newMessageText={state.dialogsPage.newMessageText}
                             addMessage={addMessage}
                             onMessageChange={onMessageChange}/>
                )
            }
        }</StoreContext.Consumer>
    )

}

export default DialogsContainer;