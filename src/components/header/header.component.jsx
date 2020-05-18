import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import './header.styles.scss';

const Header = ({currentUser, hidden}) => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <div className='logo' />
        </Link>

        <div className='options'>
            <Link className='option' to='/produtos'>
                PRODUTOS
            </Link>

            <Link className='option' to='/atendimentos'>
                ATENDIMENTOS
            </Link>

            <Link className='option' to='/contato'>
                CONTATO
            </Link>
            {currentUser ? (
                <div className='option' onClick={() => auth.signOut()}>
                    SAIR
                </div>
            ) : (
                <Link className='option' to='/login'>
                    LOGIN
                </Link>
            )}

            <CartIcon />
        </div>
            {
                hidden ? null : <CartDropdown />
            }
    </div>
);

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);