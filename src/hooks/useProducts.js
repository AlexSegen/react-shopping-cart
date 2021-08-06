
import React, { useContext } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';

export const useProducts = () => {
   
    const ctx = useContext(ProductsContext)

    return {
        ...ctx
    }
}