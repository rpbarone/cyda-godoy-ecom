import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header = ({currentUser}) => (
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
            {currentUser ? (
                <div className='option' onClick={() => auth.signOut()}>
                    SAIR
                </div>
            ) : (
                <Link className='option' to='/login'>
                    LOGIN
                </Link>
            )}
        </div>
    </div>
);

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);