import React from 'react';

import Slider from '../../components/slider/slider.component';
import Banner from '../../components/banner/banner.component';


import './main-carousel.styles.scss';

const MainCarousel = () => (
    <div className='main-carousel'>
        <Slider slideWidth={100} slideQtd={1} interval={8000}>
            <Banner
            type={'Agenda'}
            title={'ATENDIMENTO XAMÂNICO'} 
            subtitle={'Benzimento com Ervas, Cirurgia Espiritual, Apometria e Consulta com o Xamã'} 
            description={'Atendimento completo por apenas R$44,00'}
            btnAgenda={'CLIQUE AQUI PARA SABER AS DATAS'}
            imageUrl={'https://i.ibb.co/wdN7Mv2/cyda.jpg'}
            />
            <Banner 
            type={'KIT'}
            title={'LIMPEZA DOS CHACKRAS'} 
            subtitle={'01 Fitofloral Limpeza dos Chackras + 02 Banhos de Limpeza'} 
            scratchInfo={'de R$94,00'} 
            description_2={'por R$85,00'}
            btnOffer={'CLIQUE AQUI PARA COMPRAR'}
            imageUrl={'https://www.cristaisaquarius.com.br/blog/wp-content/uploads/2018/07/Signs-you-need-to-align-your-chakras-640x360.jpg'}
            />
            <Banner 
            type={'Agenda'}
            title={'ATENDIMENTO EXU MARABÔ'} 
            subtitle={'Cirurgia Espiritual e Trabalhos de Cura'} 
            description={'Atendimento completo por apenas R$44,00'}
            btnAgenda={'CLIQUE AQUI PARA SABER AS DATAS'}
            imageUrl={'https://i.ibb.co/NWCMwJp/exu-1.jpg'}
            />
        </Slider>
    </div>
);

export default MainCarousel;