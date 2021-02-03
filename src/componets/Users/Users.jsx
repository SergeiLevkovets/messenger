import React from 'react';
import Paginator from "../common/paginator/Paginator";
import User from "./User";
import css from "css";

const Users = ({
                   currentPage, totalCount, pageSize, portionSize, onPageChanged,
                   users, followingInProgress, unFollow, follow
               }) => {

    return <div>
        <Paginator currentPage={currentPage}
                   onPageChanged={onPageChanged}
                   totalCount={totalCount}
                   pageSize={pageSize}
                   portionSize={portionSize}
        />
        {users.map(u =>
            <User className={css.users}
                  key={u.id}
                  user={u}
                  followingInProgress={followingInProgress}
                  follow={follow}
                  unFollow={unFollow}
            />
        )}
    </div>
}

export default Users;