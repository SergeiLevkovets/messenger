import {Redirect} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";
import {getIsAuth} from "../redux/AuthSelectors";

let mapStateToProps = (state) => {
    return {
        isAuth: getIsAuth(state)
    }
}

export const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to='/loginName'/>
            return <Component {...this.props} />
        }
    }

    return connect(mapStateToProps)(RedirectComponent);


}