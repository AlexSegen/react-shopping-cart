import React, { createContext, useEffect, useState } from 'react'
import { dummyProducts } from '../services/dummy'
export const ProductsContext = createContext()

const ProductsContextProvider = ({ children }) => {
  const [products] = useState(dummyProducts)
  const [filteredProducts, setFilteredProducts] = useState([])

  const searchProduct = (name) => {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(name.toLowerCase())
    )
    setFilteredProducts(filteredProducts)
  }
  useEffect(() => {
    setFilteredProducts(dummyProducts)
  }, [])

  return (
    <ProductsContext.Provider value={{ filteredProducts, searchProduct }}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsContextProvider
