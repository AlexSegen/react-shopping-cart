import React from 'react';
import { Link } from "react-router-dom";
import styles from './header.module.scss';

const Header = () => {
    return ( 
        <header className={styles.header}>
            <Link to='/'>Store</Link>
            <Link to='/about'>About</Link>
            <Link to='/cart'>Cart (0)</Link>
        </header>
     );
}
 
export default Header;