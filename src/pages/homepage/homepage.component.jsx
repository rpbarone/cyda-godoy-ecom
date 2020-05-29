import React from 'react';

import Directory from '../../components/directory/directory.component';
import MainCaroussel from '../../components/main-carousel/main-carousel.component';
import MainProducts from '../../components/main-products/main-products.component';
import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
        <MainCaroussel />
        <MainProducts />
        <Directory />
    </div> 
)

export default HomePage;