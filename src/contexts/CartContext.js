import React, { createContext, useState, useEffect } from 'react';
export const CartContext = createContext()

// const initialState = { cartItems: [], total: 0, itemCount: 0 };

const CartContextProvider = ({children}) => {

    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    const increase = id => {
        cartItems[cartItems.findIndex(item => item.id === id)].quantity++
        setCartItems([...cartItems])
    }

    const decrease = id => {
        cartItems[cartItems.findIndex(item => item.id === id)].quantity--
        setCartItems([...cartItems])
    }

    const isInCart = (product) => {
        return !!cartItems.find(item => item.id === product.id);
    }

    const addProduct = product => {

        if (!cartItems.find(item => item.id === product.id)) {
            setCartItems([
                ...cartItems,
                {
                    ...product,
                    quantity: 1
                }
            ]);
        } else {
            increase(product.id)
        }
    }

    const removeProduct = product => {

        setCartItems([
            ...cartItems.filter(item => item.id !== product.id)
        ])
    }

    const sumTotal = () => {
        let totalPrices = cartItems.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
        setTotal(totalPrices);

        let totalQty = cartItems.reduce((total, product) => total + product.quantity, 0);
        setTotalItems(totalQty);
    }

    useEffect(() => {
        sumTotal()
    }, [cartItems]);

    const contextValues = {
        cartItems,
        removeProduct,
        total,
        totalItems,
        addProduct,
        increase,
        decrease,
        isInCart
    } 

    return ( 
        <CartContext.Provider value={contextValues} >
            { children }
        </CartContext.Provider>
     );
}
 
export default CartContextProvider;