import React, { useState } from 'react';

import ProductItem from './ProductItem';
import styles from './ProductsGrid.module.scss';
import { useProducts } from '../../hooks/useProducts';

const ProductsGrid = () => {

    const { products } = useProducts()

    const [searchItem,setSearchItem] = useState("");

    return ( 
        <div className={styles.p__container}>
            <div className="row">
                <div className="col-sm-8">
                    <div className="py-3">
                        {products.length} Products
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                        <input type="text" name="" placeholder="Search product" className="form-control" value={searchItem} onChange={e => {setSearchItem(e.target.value)}} id=""/>
                    </div>
                </div>
            </div>
            <div className={styles.p__grid}>

                {
                    products.filter((val)=>{
                        if(searchItem === ""){
                            return val
                        } else if(val.name.toLowerCase().includes(searchItem.toLocaleLowerCase())){
                            return val
                        }
                    }).map(product => (
                        <ProductItem key={product.id} product={product}/>
                    ))
                }

            </div>
            <div className={styles.p__footer}>

            </div>
        </div>
     );
}
 
export default ProductsGrid;