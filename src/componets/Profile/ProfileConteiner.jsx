import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserById, savePhoto, updateStatus} from "../../redux/ProfileReducer";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";
import {getAuthUserId} from "../../redux/AuthSelectors";

class ProfileContainer extends React.Component {

    refreshProfile() {
        const {match, authUserId} = this.props;
        let userId = match.params.userId;
        if (!userId) {
            if (authUserId) {
                userId = authUserId;
            } else userId = 2
        }
        this.props.getUserById(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <Profile isOwner={!this.props.match.params.userId} {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    storeStatus: state.profilePage.status,
    authUserId: getAuthUserId(state)
})

export default compose(
    connect(mapStateToProps, {getUserById, getStatus, updateStatus, savePhoto}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
