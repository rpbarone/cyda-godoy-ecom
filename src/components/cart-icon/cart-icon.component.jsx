import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as ShoppingBag } from '../../assets/icons/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { selectItemCount } from '../../redux/cart/cart.selectors';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div onClick={toggleCartHidden} className='cart-icon flex'>
        <ShoppingBag className='shopping-icon' />
        <span className='item-count st'>{ itemCount }</span>
    </div>
)

const mapStateToProps = createStructuredSelector ({
    itemCount: selectItemCount
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);