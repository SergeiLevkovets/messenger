import React from 'react';
import {addMessage, setDialogsState, updateNewMessageText} from "../../redux/DialogReducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";
import {getUserById} from "../../redux/ProfileReducer";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
    }
}

let mapDispatchToProps = {
    addMessage,
    updateNewMessageText,
    setDialogsState
}

export default compose(
    connect(mapStateToProps, {getUserById}),
    withAuthRedirect
)(Dialogs)
