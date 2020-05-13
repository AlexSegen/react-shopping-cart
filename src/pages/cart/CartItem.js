import React from 'react';


const CartItem = () => {
    return ( 
        <div className="row no-gutters py-2">
            <div className="col-sm-3">
                <img
                alt="Ola"
                style={{margin: "0 auto"}} 
                src="http://placehold.it/150x80" className="img-fluid d-block"/>
            </div>
            <div className="col-sm-3">
                <h4 className="mb-1">Product Title</h4>
                <p className="mb-1">Price: $ 23222 </p>
                
            </div>
            <div className="col-sm-3">
                <p className="mb-0">Qty: 2</p>
            </div>
            <div className="col-sm-3 text-right">
                 <button className="btn btn-primary btn-sm mr-2">+</button>
                 <button className="btn btn-danger btn-sm">-</button>
            </div>
        </div>
     );
}
 
export default CartItem;