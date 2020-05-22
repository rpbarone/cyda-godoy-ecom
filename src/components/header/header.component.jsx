import React from 'react';

import HeaderTopBar from '../header-top-bar/header-top-bar.component';
import HeaderMain from '../header-main/header-main.component';
import HeaderNavigation from '../header-navigation/header-navigation.component';
import AdsBar from '../ads-bar/ads-bar.component';

import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <AdsBar />
        <HeaderTopBar />
        <HeaderMain />
        <HeaderNavigation />
    </div>
);

export default Header;