import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden }) => (
    <div onClick={toggleCartHidden} className='cart-icon'>
        <ShoppingBag className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);