import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total }) => (
    <div className='checkout-page block flex'>
        <div className='checkout-header t'>
            <div className='header-block'>
                <span className='title'>Produtos</span>
            </div>
            <div className='header-block description'>
                <span className='title'>Descrição</span>
            </div>
            <div className='header-block'>
                <span className='title'>Quantidade</span>
            </div>
            <div className='header-block'>
                <span className='title'>Preço</span>
            </div>
            <div className='header-block'>
                <span className='title'>Remover</span>
            </div>
        </div>

        {
            cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItems={cartItem} />
            ))
        }
        <span className='total h'>TOTAL: R${total},00</span>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);