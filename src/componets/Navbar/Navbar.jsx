import React from 'react';
import css from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={css.nav}>
            <div className={css.item}>
                <NavLink to='/initialValues' activeClassName={css.activeLinc}>Profile</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to='/dialogs' activeClassName={css.activeLinc}>Messages</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to='/news' activeClassName={css.activeLinc}>News</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to='/music' activeClassName={css.activeLinc}>Music</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to='/users' activeClassName={css.activeLinc}>Users</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to='/settings' activeClassName={css.activeLinc}>Settings</NavLink>
            </div>
        </nav>
    )

}

export default Navbar;