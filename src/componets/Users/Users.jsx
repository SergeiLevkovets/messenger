import React from 'react';
import css from './Users.module.css';
import axios from "axios";
import userPhoto from "../../assets/userPhoto.png"

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            }
        )
    }

    onPageChange = (page) => {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items);
            }
        )
    }

    getPages() {
        let pageCount = Math.ceil(this.props.totalCount / this.props.pageSize);
        let currentPage = this.props.currentPage;
        let pages = [];
        if (currentPage - 5 <= 0 ){
            for (let i = 1 ; i <= 10; i++) {
                pages.push(i);
            }
        }else if (currentPage + 5  >= pageCount) {
            for (let i = pageCount-10 ; i <= pageCount; i++) {
                pages.push(i);
            }
        }else {
            for (let i = currentPage - 5 ; i <= currentPage + 5; i++) {
                pages.push(i);
            }
        }
        return pages
    }

    render() {
        debugger


        return <div>
            <div>
                {this.getPages().map(p => {
                    return <button className={this.props.currentPage === p && css.selectedPage}
                                   onClick={() => this.onPageChange(p)}>{p}</button>
                })}
            </div>
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