import React from 'react';

import CartItem from './CartItem';
import { useCart } from '../../hooks/useCart';
import styles from './CartProducts.module.scss';

const CartProducts = () => {

    const { cartItems } = useCart();

    return ( 
        <div className={styles.p__container}>
            <div className="card card-body border-0">

                {
                    cartItems.map(product =>  <CartItem key={product.id} product={product}/>)
                }

            </div>
        </div>

     );
}
 
export default CartProducts;