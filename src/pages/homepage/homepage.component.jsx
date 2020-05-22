import React from 'react';

import Directory from '../../components/directory/directory.component';
import MainBanner from '../../components/main-banner/main-banner.component';
import Footer from '../../components/footer/footer.component';

import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
        <MainBanner />
        <Directory />
    </div> 
)

export default HomePage;