import React, { useContext } from 'react';
import Layout from '../../components/Layout';

import CartProducts from './CartProducts';
import { CartContext } from '../../contexts/CartContext';

const Cart = () => {

    const { total } = useContext(CartContext);
    
    return ( 
        <Layout title="Cart" description="This is the Cart page" >
            <div >
                <div className="text-center">
                    <h1>Cart</h1>
                    <p>This is the Cart Page.</p>
                </div>

                <div className="row no-gutters">
                    <div className="col-sm-9 p-3">
                        <CartProducts/>
                    </div>
                    <div className="col-sm-3 p-3">
                        <p>Total</p>
                        <h4 className="m-0 txt-right">{total}</h4>
                    </div>
                </div>

            </div>
        </Layout>
     );
}
 
export default Cart;