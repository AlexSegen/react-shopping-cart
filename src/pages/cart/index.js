import React from 'react';
import Layout from '../../components/Layout';

import CartProducts from './CartProducts';

const Cart = () => {
    
    return ( 
        <Layout title="Cart" description="This is the Cart page" >
            <div >
                <div className="text-center">
                    <h1>Cart</h1>
                    <p>This is the Cart Page.</p>
                </div>

                <CartProducts/>

            </div>
        </Layout>
     );
}
 
export default Cart;