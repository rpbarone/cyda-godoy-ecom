import React from 'react';

import Slider from '../../components/slider/slider.component';
import Banner from '../../components/banner/banner.component';


import './main-carousel.styles.scss';

const MainCarousel = () => (
    <div className='main-carousel'>
        <Slider slideWidth={100} slideQtd={1} interval={999999}>
            <Banner 
            title={'1'} 
            subtitle={'3 FLORAIS'} 
            description={'de R$132,00'} 
            description_2={'por R$120,00'}
            imageUrl={'https://i.ibb.co/fS2f6HL/espaco1.jpg'}
            />
            <Banner 
            title={'2'} 
            subtitle={'heyyyy'} 
            description={'asisso'} 
            description_2={'ahsduiashduas'}
            imageUrl={'https://i.ibb.co/QfV0fzz/espaco2.jpg'}
            />
            <Banner 
            title={'3'} 
            subtitle={'heyyyy'} 
            description={'asisso'} 
            description_2={'ahsduiashduas'}
            imageUrl={'https://i.ibb.co/cvDmBZB/espaco4.jpg'} />
            <Banner 
            title={'4'} 
            subtitle={'heyyyy'} 
            description={'asisso'} 
            description_2={'ahsduiashduas'}
            imageUrl={'https://i.ibb.co/TcyX3H5/espaco3.jpg'} />
        </Slider>
    </div>
);

export default MainCarousel;