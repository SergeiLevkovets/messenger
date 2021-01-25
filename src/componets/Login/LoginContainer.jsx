import React from 'react';
import {connect} from "react-redux";
import Login from "./Login";
import {login} from "../../redux/AuthReducer";

class LoginContainer extends React.Component {

    render() {
        return <>
            <Login {...this.props}/>
        </>
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.authStore.isAuth
})


let mapDispatchToProps = {
    doLogin: login
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);