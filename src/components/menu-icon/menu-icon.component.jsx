import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as MenuHamburger } from '../../assets/icons/menu.svg';
import { toggleMenuHidden } from '../../redux/menu/menu.actions';

import './menu-icon.styles.scss';

const MenuIcon = ({ toggleMenuHidden }) => (
    <div onClick={toggleMenuHidden} className='menu-icon flex'>
        <MenuHamburger className='icon' />
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleMenuHidden: () => dispatch(toggleMenuHidden())
})

export default connect(null, mapDispatchToProps)(MenuIcon);