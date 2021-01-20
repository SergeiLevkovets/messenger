import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserById} from "../../redux/ProfileReducer";
import {withRouter} from "react-router";
import {Redirect} from " react-router-dom"
import {withAuthRedirect} from "../../hoc/AuthRedirect";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserById(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let AuthRedirectComponent = (props) => {
    if (!props.isAuth) return <Redirect to='/login' />
    return <ProfileContainer {...props} />
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.authStore.isAuth
})

let WithUrlDataContainerComponent = withRouter(withAuthRedirect(ProfileContainer))

export default connect(mapStateToProps, {getUserById})(WithUrlDataContainerComponent);