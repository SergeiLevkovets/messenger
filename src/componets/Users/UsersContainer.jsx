import React from 'react';
import {connect} from "react-redux";
import {follow, unFollow, getUsers, setCurrentPage, toggleIsFollowingProgress} from "../../redux/UsersReducer";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (page) => {
        let {setCurrentPage, getUsers, pageSize} = this.props;
        setCurrentPage(page)
        getUsers(page, pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users onPageChanged={this.onPageChanged} {...this.props}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        portionSize: state.usersPage.portionSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

let mapDispatchToProps = {
    follow,
    unFollow,
    setCurrentPage,
    toggleIsFollowingProgress,
    getUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);