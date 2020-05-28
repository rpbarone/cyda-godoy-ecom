import React from 'react';

import Directory from '../../components/directory/directory.component';
import MainBanner from '../../components/main-banner/main-banner.component';
import MainProducts from '../../components/main-products/main-products.component';

import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
        <MainBanner />
        <MainProducts />
        <Directory />
    </div> 
)

export default HomePage;