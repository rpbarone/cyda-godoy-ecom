import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <div className='logo' />
        </Link>

        <div className='options'>
            <Link className='option' to='/produtos'>
                PRODUTOS
            </Link>

            <Link className='option' to='/atendimentos'>
                ATENDIMENTOS
            </Link>

            <Link className='option' to='/contato'>
                CONTATO
            </Link>
        </div>
    </div>
);

export default Header;