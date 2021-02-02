import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserById, updateStatus} from "../../redux/ProfileReducer";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";
import {getAuthUserId} from "../../redux/AuthSelectors";

class ProfileContainer extends React.Component {

    componentDidMount() {
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

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    storeStatus: state.profilePage.status,
    authUserId: getAuthUserId(state)
})

export default compose(
    connect(mapStateToProps, {getUserById, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
