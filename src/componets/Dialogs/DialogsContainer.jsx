import React from 'react';
import {addMessage, setDialogsState, updateNewMessageText} from "../../redux/DialogReducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/AuthRedirect";

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

let AuthRedirectComponent = (props) => {
    if (!props.isAuth) return <Redirect to='/login' />
    return <Dialogs {...props} />
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(withAuthRedirect(Dialogs));

export default DialogsContainer;