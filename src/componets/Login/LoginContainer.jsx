import React from 'react';
import {connect} from "react-redux";
import Login from "./Login";
import {login} from "../../redux/AuthReducer";
import {getIsAuth} from "../../redux/AuthSelectors";

class LoginContainer extends React.Component {

    render() {
        return <>
            <Login {...this.props}/>
        </>
    }
}

let mapStateToProps = (state) => ({
    isAuth: getIsAuth(state)
})


let mapDispatchToProps = {
    doLogin: login
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);