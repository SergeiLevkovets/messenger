import React from 'react';
import css from './Users.module.css';
import userPhoto from "../../assets/userPhoto.png"
import {NavLink} from "react-router-dom";

const User = ({user, followingInProgress, unFollow, follow}) => {
    return (
        <div>
            <NavLink to={'/profile/' + user.id}>
                <div>
                    <img className={css.photo} src={user.photos.small || userPhoto}/>
                </div>
            </NavLink>
            <div>
                {user.followed
                    ? <button disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  unFollow(user.id)
                              }}
                    >Unfollow</button>
                    : <button disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  follow(user.id)
                              }}
                    >Follow</button>
                }
            </div>
            <div>{user.name}</div>
            <div>{user.status}</div>
            <div>'user.location.country'</div>
            <div>'user.location.city'</div>
        </div>
    )
}

export default User;