
import  { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

export const useCart = () => {
   
    const ctx = useContext(CartContext)

    return {
        ...ctx
    }
}