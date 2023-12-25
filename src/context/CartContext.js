// context/CartContext.js
import React, { createContext, useContext, useReducer } from 'react'

const CartContext = createContext()

const initialState = {
    cartItems: [],
    promoCode: null,
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
            }

        case 'APPLY_PROMO_CODE':
            return {
                ...state,
                promoCode: action.payload,
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    item => item.id !== action.payload,
                ),
            }

        case 'UPDATE_QUANTITY':
            return {
                ...state,
                cartItems: state.cartItems.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: action.payload.quantity }
                        : item,
                ),
            }

        case 'GET_CART_ITEMS':
            return state // This action is optional; it returns the current state (cart items).

        default:
            return state
    }
}

export const useCart = () => {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error('useCart must be used within a CartProvider')
    }
    return context
}

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState)

    const addToCart = item => {
        const existingItem = state.cartItems.find(
            cartItem => cartItem.id === item.id,
        )

        if (existingItem) {
            // If the item is already in the cart, update the quantity
            dispatch({
                type: 'UPDATE_QUANTITY',
                payload: { id: item.id, quantity: existingItem.quantity + 1 },
            })
        } else {
            // If the item is not in the cart, add it
            dispatch({ type: 'ADD_TO_CART', payload: { ...item, quantity: 1 } })
        }
    }

    const applyPromoCode = code => {
        dispatch({ type: 'APPLY_PROMO_CODE', payload: code })
    }

    const removeFromCart = itemId => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: itemId })
    }

    const updateQuantity = (itemId, quantity) => {
        dispatch({ type: 'UPDATE_QUANTITY', payload: { id: itemId, quantity } })
    }

    const getCartItems = () => {
        dispatch({ type: 'GET_CART_ITEMS' })
    }

    return (
        <CartContext.Provider
            value={{
                ...state,
                addToCart,
                applyPromoCode,
                removeFromCart,
                updateQuantity,
                getCartItems,
            }}>
            {children}
        </CartContext.Provider>
    )
}
