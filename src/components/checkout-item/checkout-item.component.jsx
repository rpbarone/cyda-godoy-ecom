import React from 'react';
import { connect } from 'react-redux';

import './checkout-item.styles.scss';
import { clearItem, addItem, removeItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItems, clearItem, addItem, removeItem }) => {
    const { imageUrl, name, quantity, price } = cartItems;
return(
    <div className='checkout-item'>
        <div className='image-container'>
            <img alt='item' src={imageUrl} />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div onClick={() => removeItem(cartItems)} className='arrow'>&#10094;</div>
            <span className='value'>{quantity}</span>
            <div onClick={() => addItem(cartItems)} className='arrow'>&#10095;</div>
        </span>
        <span className='price'>R${price}</span>
        <div onClick={() => clearItem(cartItems)} className='remove-button'>&#10005;</div>
    </div>
)}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItem(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(
    null,
    mapDispatchToProps
    )(CheckoutItem);