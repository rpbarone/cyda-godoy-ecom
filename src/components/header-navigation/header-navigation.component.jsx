import React from 'react';
import { Link } from 'react-router-dom';

import './header-navigation.styles.scss';

const HeaderNavigation = () => (
    <div className='navigation block flex sh'>
            <Link className='option link und-effect' to='/'>
            HOME
            </Link>

            <Link className='option link und-effect' to='/produtos'>
                    PRODUTOS
            </Link>

            <Link className='option link und-effect' to='/atendimentos'>
                    ATENDIMENTOS
            </Link>

            <Link className='option link und-effect' to='/agenda'>
                    AGENDA
            </Link>
        
    </div>
);


export default HeaderNavigation;