import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectInputQtd = createSelector(
    [selectCart],
    cart => cart.inputQtd
)

export const selectItemCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatorQuantity, item) => (
        accumulatorQuantity + item.quantity
    ), 0)
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatorQuantity, item) => (
        accumulatorQuantity + item.price * item.quantity
    ),0)
)