import React from 'react';
import css from './Header.module.css';

const Header = () => {
    return (
        <header className={css.header}>
            <img className={css.logo} src='https://cdn.logo.com/hotlink-ok/logo-social.png'/>
            Header
        </header>
    )

}

export default Header;