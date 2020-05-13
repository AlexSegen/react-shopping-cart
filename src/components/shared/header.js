import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import styles from './header.module.scss';
import { CartContext } from '../../contexts/CartContext';

const Header = () => {

    const {totalItems} = useContext(CartContext);
    
    return ( 
        <header className={styles.header}>
            <Link to='/'>Store</Link>
            <Link to='/about'>About</Link>
            <Link to='/cart'>Cart ({totalItems})</Link>
        </header>
     );
}
 
export default Header;