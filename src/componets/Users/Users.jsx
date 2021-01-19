import React from 'react';
import css from './Users.module.css';
import userPhoto from "../../assets/userPhoto.png"
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

let Users = (props) => {

    let pageCount = Math.ceil(props.totalCount / props.pageSize);
    let currentPage = props.currentPage;
    let pages = [];
    if (currentPage - 5 <= 0) {
        for (let i = 1; i <= 10; i++) {
            pages.push(i);
        }
    } else if (currentPage + 5 >= pageCount) {
        for (let i = pageCount - 10; i <= pageCount; i++) {
            pages.push(i);
        }
    } else {
        for (let i = currentPage - 5; i <= currentPage + 5; i++) {
            pages.push(i);
        }
    }

    return <div>
        <div>
            {pages.map(p => {
                return <button className={props.currentPage === p && css.selectedPage}
                               onClick={() => props.onPageChanged(p)}>{p}</button>
            })}
        </div>
        {
            props.users.map(u =>
                <div id={u.id} className={css.users}>
                    <NavLink to={'/profile/' + u.id}>
                        <div>
                            <img className={css.photo} src={u.photos.small || userPhoto}/>
                        </div>
                    </NavLink>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                usersAPI.unFollow(u.id).then(data => {
                                    if (data.resultCode === 0) {
                                        props.unFollow(u.id)
                                    }
                                })
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                usersAPI.follow(u.id).then(data => {
                                    if (data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                })
                            }}>Follow</button>
                        }
                    </div>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                    <div>'u.location.country'</div>
                    <div>'u.location.city'</div>
                </div>
            )
        }
    </div>
}

export default Users;