import React from 'react';

import './main-banner.styles.scss';

const MainBanner = () => (
    <div className='banner'>
        <div className='overlay'>
            <div className='content'>
                <span className='title h'>COMBO</span>
                <span className='title hl'>3 FLORAIS</span>
                <span className='text t'>De R$132,00</span>
                <span className='text sh'>Por R$120,00</span>
            </div>
        </div>
    </div>
);

export default MainBanner;