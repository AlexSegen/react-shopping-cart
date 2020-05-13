const sumItems = cartItems => {
    let total = cartItems.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
    let itemCount = cartItems.reduce((total, product) => total + product.quantity, 0);
    return {
        total,
        itemCount
    }
}

export const CartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":

            if (!state.cartItems.find(item => item.id === action.payload.id)) {
                state.cartItems.push({
                    ...action.payload,
                    quantity: 1
                })
            } else {
                state.cartItems[state.cartItems.findIndex(item => item.id === action.payload.id)].quantity++
            }

            return {
                ...state,
                ...sumItems(...state.cartItems),
                cartItems: [...state.cartItems, action.payload]
            }
        case "REMOVE_ITEM":
            return {
                ...state,
                ...sumItems([...state.cartItems.filter(item => item.id !== action.payload.id)]),
                cartItems: [...state.cartItems.filter(item => item.id !== action.payload.id)]
            }
        case "INCREASE":
            state.cartItems[state.cartItems.findIndex(item => item.id === action.payload.id)].quantity++
            return {
                ...state,
                ...sumItems([...state.cartItems]),
                cartItems: [...state.cartItems]
        }
        case "DECREASE":
            state.cartItems[state.cartItems.findIndex(item => item.id === action.payload.id)].quantity--
            return {
                ...state,
                ...sumItems([...state.cartItems]),
                cartItems: [...state.cartItems]
        }

    }
}