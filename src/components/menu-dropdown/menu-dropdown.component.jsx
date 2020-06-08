import React from 'react';
import { connect } from 'react-redux';

import HeaderNavigation from '../header-navigation/header-navigation.component';
import SearchInput from '../search-input/search-input.component';
import HeaderTopBar from '../header-top-bar/header-top-bar.component';

import { toggleMenuHidden } from '../../redux/menu/menu.actions';
import './menu-dropdown.styles.scss';

const MenuDropdown = ({ toggleMenuHidden }) => (
    <div className='dropdown-container'>
        <div className='menu-dropdown'>
            <div className='menu-header'>
                <div className='logo'></div>
                <button onClick={toggleMenuHidden} className='btn-close'>&#10005;</button>
            </div>
            <div className='menu-login'>
                <HeaderTopBar/>
            </div>
            <div className='menu-body'>
                <HeaderNavigation/>
                <div onSubmit={toggleMenuHidden}>
                    <SearchInput />
                </div>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleMenuHidden: () => dispatch(toggleMenuHidden())
})

export default connect(null, mapDispatchToProps)(MenuDropdown);