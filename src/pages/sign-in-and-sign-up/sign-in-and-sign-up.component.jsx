import React from 'react';
import { withRouter } from 'react-router-dom';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = ({ history }) => {
return(
    <div className='sign-in-and-sign-up block'>
        {
            history.location.hash === '#cadastro' ?
            <div className='register'>
                <SignUp />
            </div>
            :
            <div className='login'>
                <SignIn />
                <SignUp />
            </div>
        }
    </div>
)};

export default withRouter(SignInAndSignUpPage);