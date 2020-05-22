import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import AlertError from '../alert-error/alert-error.component';

import { auth, signInWithFacebook } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            error: false
        };
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ email: '', password: ''});
        } catch (error) {
            this.setState({ error: true })
        }
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return(
            <div className='sign-in'>
                <h2 className='sh sub-color'>JÁ TENHO UMA CONTA</h2>
                <span className='t less-important-color'>Entre inserindo seu e-mail e senha.</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                    name='email'
                    type='email'
                    handleChange={this.handleChange}
                    value={this.state.email}
                    label='E-mail'
                    required
                    />

                    <FormInput
                    name='password'
                    type='password'
                    handleChange={this.handleChange}
                    value={this.state.password}
                    label='Senha'
                    required
                    />

                    <div className='buttons'>
                        <CustomButton type='submit'>Entrar</CustomButton>
                        <CustomButton onClick={signInWithFacebook} isFacebookSignIn>
                            Entrar com Facebook
                        </CustomButton>
                    </div>

                    {
                        this.state.error ?
                        <AlertError msgError='E-mail ou senha inválidos.' />
                        :
                        null
                    }
                </form>
            </div>
        )
    }
}

export default SignIn;
