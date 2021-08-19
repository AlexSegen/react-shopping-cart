import React, { useContext, useState } from 'react'
import ProductItem from './ProductItem'
import { ProductsContext } from '../../contexts/ProductsContext'
import styles from './ProductsGrid.module.scss'

const ProductsGrid = () => {
  const { filteredProducts, searchProduct } = useContext(ProductsContext)
  const handleSearch = (event) => {
    searchProduct(event.target.value)
  }
  return (
    <div className={styles.p__container}>
      <div className='row'>
        <div className='col-sm-8'>
          <div className='py-3'>{filteredProducts.length} Products</div>
        </div>
        <div className='col-sm-4'>
          <div className='form-group'>
            <input
              type='text'
              name='product_name'
              onChange={(e) => handleSearch(e)}
              placeholder='Search product'
              className='form-control'
              id=''
            />{' '}
          </div>

        </div>
      </div>
      <div className={styles.p__grid}>
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      <div className={styles.p__footer}></div>
    </div>
  )
}

export default ProductsGrid
