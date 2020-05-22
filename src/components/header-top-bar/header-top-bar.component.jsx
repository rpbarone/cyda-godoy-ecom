import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as User } from '../../assets/user.svg';
import { ReactComponent as Exit } from '../../assets/exit.svg';
import { ReactComponent as Phone } from '../../assets/phone.svg';
import { ReactComponent as Email } from '../../assets/email.svg';



import { auth } from '../../firebase/firebase.utils';

import { selectCurrentUser } from '../../redux/user/user.selectors';

import './header-top-bar.styles.scss';

const HeaderTopBar = ({ currentUser }) => (
    <div className='top-bar flex block t main-color-bg'>
        <div className='contact flex'>
            <div className='phone flex'>
                <Phone className='icon' />
                <span className='phone-number'>(11) 2296-9090</span>
            </div>

            <div className='email flex'>
                <Email className='icon' />
                <span className='email'>contato@cydagodoyxama.com.br</span>
            </div>
        </div>

        <div className='login'>
            {currentUser ? (
                <div className='option' onClick={() => auth.signOut()}>
                <div className='account flex'>
                    <Exit className='icon' />
                    <span className='login'>Sair</span>
                </div>
                </div>
            ) : (
                <Link className='option' to='/login'>
                    <div className='conta flex'>
                        <User className='icon' />
                        <span className='login'>Login</span>
                    </div>
                </Link>
            )}
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(HeaderTopBar);