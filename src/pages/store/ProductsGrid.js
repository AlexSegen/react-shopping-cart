import React from 'react';
import ProductItem from './ProductItem';

import styles from './ProductsGrid.module.scss';

const ProductsGrid = () => {
    return ( 
        <div className={styles.p__container}>
            <div className={styles.p__toolbar}>
                <div>
                    20 Products
                </div>
                <div>
                    <div className="form-group">
                        <input type="text" name="" className="form-control" id=""/>
                    </div>
                </div>
            </div>
            <div className={styles.p__grid}>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>

            </div>
            <div className={styles.p__footer}>

            </div>
        </div>
     );
}
 
export default ProductsGrid;