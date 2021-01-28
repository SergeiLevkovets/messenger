import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/AuthReducer";
import {getAuthUserId, getEmail, getIsAuth, getLoginName} from "../../redux/AuthSelectors";

class HeaderContainer extends React.Component {

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    authUserId: getAuthUserId(state),
    email: getEmail(state),
    loginName: getLoginName(state),
    isAuth: getIsAuth(state)
})

export default connect(mapStateToProps, {logout})(HeaderContainer);