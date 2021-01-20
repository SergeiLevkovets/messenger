import {Redirect} from "react-router-dom";
import Dialogs from "../componets/Dialogs/Dialogs";
import React from "react";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        isAuth: state.authStore.isAuth
    }
}

export const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to='/login' />
            return <Component {...this.props} />
        }
    }

    return connect(mapStateToProps)(RedirectComponent);


}