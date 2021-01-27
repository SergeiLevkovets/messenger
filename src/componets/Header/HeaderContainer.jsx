import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/AuthReducer";

class HeaderContainer extends React.Component {

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    id: state.authStore.id,
    email: state.authStore.email,
    loginName: state.authStore.loginName,
    isAuth: state.authStore.isAuth
})

export default connect(mapStateToProps, {logout})(HeaderContainer);