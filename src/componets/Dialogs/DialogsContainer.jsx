import React from 'react';
import {addMessage, setDialogsState, updateNewMessageText} from "../../redux/DialogReducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = {
        addMessage,
        updateNewMessageText,
        setDialogsState
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;