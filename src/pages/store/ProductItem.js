import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = () => {
    return ( 
        <div className="card card-body">
            <img style={{display: "block", margin: "0 auto 10px"}} className="img-fluid" 
            src="http://placehold.it/400x300" alt=""/>
            <p>Product name</p>
            <h3 className="text-left">$ 16000</h3>
            <div className="text-right">
                <Link className="btn btn-link btn-sm mr-2">Details</Link>
                <button className="btn btn-primary btn-sm">Add to cart</button>
            </div>
        </div>
     );
}
 
export default ProductItem;