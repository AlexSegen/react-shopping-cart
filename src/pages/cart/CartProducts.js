import React from 'react';
import CartItem from './CartItem';
import styles from './CartProducts.module.scss';

const CartProducts = () => {
    return ( 
        <div className={styles.p__container}>
            <div className="card card-body">

            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>

            </div>
        </div>

     );
}
 
export default CartProducts;