import React from 'react';

import './homepage.styles.scss';

const SECTIONS = [
    {
        title: 'banhos de ervas'
    },
    {
        title: 'fitoflorais'
    },
    {
        title: 'elixir de cristais'
    },
    {
        title: 'aromatizadores de ambiente'
    },
    {
        title: 'gel de ervas'
    },
    {
        title: 'óleos de ervas'
    },
    {
        title: 'sabonetes dos orixás'
    },
    {
        title: 'pulseiras'
    }
];

class HomePage extends React.Component {
    render() {
        return(
            <div className='homepage'>
                <h1>Seja bem vindo à página principal</h1>

            <div className='directory-menu'>
                <div className='menu-item'>
                    <div className='content'>
                        <div className='title'>BANHOS DE ERVAS</div>
                        <div className='subtitle'>COMPRE AGORA</div>
                    </div>
                </div>

                <div className='menu-item'>
                    <div className='content'>
                        <div className='title'>FITOFLORAIS</div>
                        <div className='subtitle'>COMPRE AGORA</div>
                    </div>
                </div>

                <div className='menu-item'>
                    <div className='content'>
                        <div className='title'>ELIXIR DE CRISTAIS</div>
                        <div className='subtitle'>COMPRE AGORA</div>
                    </div>
                </div>

                <div className='menu-item'>
                    <div className='content'>
                        <div className='title'>AROMATIZADORES DE AMBIENTE</div>
                        <div className='subtitle'>COMPRE AGORA</div>
                    </div>
                </div>

                <div className='menu-item'>
                    <div className='content'>
                        <div className='title'>GEL DE ERVAS</div>
                        <div className='subtitle'>COMPRE AGORA</div>
                    </div>
                </div>

                <div className='menu-item'>
                    <div className='content'>
                        <div className='title'>ÓLEOS DE ERVAS</div>
                        <div className='subtitle'>COMPRE AGORA</div>
                    </div>
                </div>

                <div className='menu-item'>
                    <div className='content'>
                        <div className='title'>SABONETES DOS ORIXÁS</div>
                        <div className='subtitle'>COMPRE AGORA</div>
                    </div>
                </div>

                <div className='menu-item'>
                    <div className='content'>
                        <div className='title'>PULSEIRAS</div>
                        <div className='subtitle'>COMPRE AGORA</div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default HomePage;