import cartActionsTypes from './cart.types';

export const toggleCartHidden = () => ({
    type: cartActionsTypes.TOGGLE_CART_HIDDEN
});

export const addItem = (item) => ({
    type: cartActionsTypes.ADD_ITEM,
    payload: item
})

export const removeItem = (item) => ({
    type: cartActionsTypes.REMOVE_ITEM,
    payload: item
})

export const clearItem = item => ({
    type: cartActionsTypes.CLEAR_CART_ITEM,
    payload: item
})