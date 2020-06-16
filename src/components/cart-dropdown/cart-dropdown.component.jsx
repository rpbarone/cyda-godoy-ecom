import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { ReactComponent as ShoppingBag } from '../../assets/icons/shopping-bag.svg'

import { selectCartItems, selectCartTotal, selectItemCount } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch, total, itemCount }) => (
    <div className='cart-dropdown white-bg'>
        <div className='cart-header flex'>
        <div className='cart-quantity flex'>
            <ShoppingBag className='shopping-icon' />
            <span className="badge st main-color-bg">{ itemCount }</span>
        </div>
            
            <div className="cart-total t">
                <span className="sub-color">Total:</span>
                <span className="main-color">R${ total },00</span>
            </div>
        </div>

        <div className='cart-items block flex t'>
            {cartItems.length ?
                cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
            ))
            : <span className='empty-message t'>Seu carrinho está vazio</span>
        }
        </div>

        <div className='cart-footer'>
            {cartItems.length ?
                <CustomButton onClick={() => {
                    history.push('/finalizar-compra');
                    dispatch(toggleCartHidden())
                }}
                >FINALIZAR COMPRA</CustomButton>
                
                :

                <CustomButton onClick={() => {
                    history.push('/produtos');
                    dispatch(toggleCartHidden());
                }}
                >VER PRODUTOS</CustomButton>

            }
        </div>
        
    </div>
)

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems,
    total: selectCartTotal,
    itemCount: selectItemCount
})

export default withRouter(connect(mapStateToProps)(CartDropdown));