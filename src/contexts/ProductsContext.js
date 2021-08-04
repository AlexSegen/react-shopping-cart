import React, { createContext,useEffect,useState } from 'react';
import { dummyProducts } from '../services/dummy';
export const ProductsContext = createContext()

const ProductsContextProvider = ({children}) => {

    const [products] = useState(dummyProducts);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const [input,setInput] = useState('')
    const searchProduct = (name) => {
        setInput(name)
    }
    useEffect(() => {
        setFilteredProducts(
            products.filter(product => product.name.toLowerCase().includes(input.toLowerCase()))
        );
        console.log("hello")
    },[input,products])

    return ( 
        <ProductsContext.Provider value={{filteredProducts,searchProduct}} >
            { children }
        </ProductsContext.Provider>
     );
}
 
export default ProductsContextProvider;