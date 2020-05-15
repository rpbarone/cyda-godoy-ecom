import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: ''});
    };

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>Já tenho uma conta</h2>
                <span>Entre inserindo seu e-mail e senha</span>

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

                    <CustomButton type='submit'>Entrar</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;
