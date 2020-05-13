import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';


const CartItem = ({product}) => {

    const { increase, decrease, removeProduct } = useContext(CartContext);

    return ( 
        <div className="row no-gutters py-2">
            <div className="col-sm-3 p-2">
                <img
                alt="Ola"
                style={{margin: "0 auto"}} 
                src={product.photo} className="img-fluid d-block"/>
            </div>
            <div className="col-sm-3 p-2">
                <h5 className="mb-1">{product.name}</h5>
                <p className="mb-1">Price: $ {product.price} </p>
                
            </div>
            <div className="col-sm-3 p-2">
                 <p className="mb-0">Qty: {product.quantity}</p>
            </div>
            <div className="col-sm-3 p-2 text-right">
                 <button 
                 onClick={() => increase(product.id)}
                 className="btn btn-primary btn-sm mr-2">+</button>

                 {
                     product.quantity > 1 &&
                     <button
                    onClick={() => decrease(product.id)}
                    className="btn btn-danger btn-sm">-</button>
                 }

                {
                     product.quantity === 1 &&
                     <button
                    onClick={() => removeProduct(product)}
                    className="btn btn-danger btn-sm">-</button>
                 }
                 
            </div>
        </div>
     );
}
 
export default CartItem;