import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({item: { imageUrl, name, price, quantity }}) => (
    <div className='cart-item'>
        <img alt='item' src={imageUrl} />
        <div className='item-title'>
            <span className='name'>{name}</span>
            <div className='item-details'>
                <span className='price main-color'>R${ price },00</span>
                <span className='quantity less-important'>Quantidade: { quantity }</span>
            </div>
        </div>
    </div>
);

export default CartItem;