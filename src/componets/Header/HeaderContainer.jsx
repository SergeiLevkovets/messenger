import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {authMe} from "../../redux/AuthReducer";
import Dialogs from "../Dialogs/Dialogs";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.authMe();
    }

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    id: state.authStore.id,
    email: state.authStore.email,
    login: state.authStore.login,
})

export default connect(mapStateToProps, {authMe})(HeaderContainer);