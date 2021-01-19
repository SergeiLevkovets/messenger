import React from 'react';
import css from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={css.header}>
            <img className={css.logo} src='https://cdn.logo.com/hotlink-ok/logo-social.png'/>
            Header
            <div className={css.loginBlock}>
                <NavLink to={'/login'}>Login</NavLink>
                <div>id: {props.id}</div>
                <div>email: {props.email}</div>
                <div>login: {props.login}</div>

            </div>
        </header>
    )

}

export default Header;