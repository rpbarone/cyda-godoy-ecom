import React from 'react';
import { connect } from 'react-redux';

import './checkout-item.styles.scss';
import { clearItemFromCart } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItems, clearItemFromCart }) => {
    const { imageUrl, name, quantity, price } = cartItems;
return(
    <div className='checkout-item'>
        <div className='image-container'>
            <img alt='item' src={imageUrl} />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>R${price}</span>
        <div onClick={() => clearItemFromCart(cartItems)} className='remove-button'>&#10005;</div>
    </div>
)}

const mapDispatchToProps = dispatch => ({
    clearItemFromCart: item => dispatch(clearItemFromCart(item))
})

export default connect(
    null,
    mapDispatchToProps
    )(CheckoutItem);