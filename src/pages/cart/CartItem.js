import React, { useContext } from 'react';
import { PlusCircleIcon, MinusCircleIcon, TrashIcon } from '../../components/icons'
import { CartContext } from '../../contexts/CartContext';

const CartItem = ({product}) => {

    const { increase, decrease, removeProduct } = useContext(CartContext);

    return ( 
        <div className="row no-gutters py-2">
            <div className="col-sm-2 p-2">
                <img
                alt="Ola"
                style={{margin: "0 auto"}} 
                src={product.photo} className="img-fluid d-block"/>
            </div>
            <div className="col-sm-4 p-2">
                <h5 className="mb-1">{product.name}</h5>
                <p className="mb-1">Price: $ {product.price} </p>
                
            </div>
            <div className="col-sm-2 p-2 text-center ">
                 <p className="mb-0">Qty: {product.quantity}</p>
            </div>
            <div className="col-sm-4 p-2 text-right">
                 <button 
                 onClick={() => increase(product.id)}
                 className="btn btn-primary btn-sm mr-2 mb-1">
                     <PlusCircleIcon width={"20px"}/>
                 </button>

                 {
                     product.quantity > 1 &&
                     <button
                    onClick={() => decrease(product.id)}
                    className="btn btn-danger btn-sm mb-1">
                        <MinusCircleIcon width={"20px"}/>
                    </button>
                 }

                {
                     product.quantity === 1 &&
                     <button
                    onClick={() => removeProduct(product)}
                    className="btn btn-danger btn-sm mb-1">
                        <TrashIcon width={"20px"}/>
                    </button>
                 }
                 
            </div>
        </div>
     );
}
 
export default CartItem;