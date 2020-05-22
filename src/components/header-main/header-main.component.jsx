import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import SearchInput from '../../components/SearchInput/search-input.component';

import { selectCartHidden } from '../../redux/cart/cart.selectors';

import './header-main.styles.scss';

const Header = ({ hidden }) => (
    <div className='main block flex'>
            <Link to='/' className='logo-container'>
                <div className='logo' />
            </Link>

            <SearchInput />

            <h2 className='slogan'>Cultura Índigena à sua disposição</h2>

            <div className='options'>
                <CartIcon />
            </div>
                {
                    hidden ? null : <CartDropdown />
                }
    </div>
);

const mapStateToProps = createStructuredSelector ({
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);