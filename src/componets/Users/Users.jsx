import React from 'react';
import css from './Users.module.css';

const Users = (props) => {
    return (
        <div>
            Users page
            {
                props.users.map(u =>
                    <div id={u.id}>
                        <div>
                            <img className={css.photo} src={u.photoUrl}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unFollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>
                            }
                        </div>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </div>
                )
            }
        </div>
    )
}

export default Users;