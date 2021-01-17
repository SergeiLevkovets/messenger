import React from 'react';
import css from './Users.module.css';
import axios from "axios";
import userPhoto from "../../assets/userPhoto.png"

class Users extends React.Component {

    constructor(props) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items);
            }
        )
    }

    render() {
        return <div>
            {
                this.props.users.map(u =>
                    <div id={u.id} className={css.users}>
                        <div>
                            <img className={css.photo} src={u.photos.small || userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unFollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
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
}

export default Users;