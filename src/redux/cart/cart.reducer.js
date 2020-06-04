import cartActionsTypes from './cart.types';
import { addItemToCart, removeItemFromCart, addItemFromProductPage } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: [],
    setQuantity: 1
}

const resetQtd = {
    resetQtd: 1
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionsTypes.TOGGLE_CART_HIDDEN: 
        return {
            ...state,
            hidden: !state.hidden
        };

        case cartActionsTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        
        case cartActionsTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
        }

        case cartActionsTypes.CLEAR_CART_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
            }
        
        case cartActionsTypes.CLEAR_QUANTITY:
            return {
                ...state,
                inputQtd: resetQtd.resetQtd
            } 
        case cartActionsTypes.ADD_QUANTITY:
            return {
                ...state,
                inputQtd: Number(action.payload)
            }
        
        case cartActionsTypes.ADD_ITEM_FROM_PRODUCT:
            return {
                ...state,
                cartItems: addItemFromProductPage(
                    state.cartItems, action.payload, state.inputQtd)
            }

        default: 
            return state;
    }
}

export default cartReducer;