import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as PhoneIcon } from '../../assets/icons/phone.svg';
import { ReactComponent as SmartphoneIcon } from '../../assets/icons/smartphone.svg';
import { ReactComponent as EmailIcon } from '../../assets/icons/email.svg';

import SearchInput from '../../components/SearchInput/search-input.component';

import './footer.styles.scss';

const Footer = () => (

    <div className='bg'>
        <div className='footer flex block'>
            <div className='contact'>
                <div className='sh title'>FALE CONOSCO</div>
                    <div className='flex contact-group'>
                        <PhoneIcon className='contact-icon' />
                        <div className='phone-number t'>(11) 2296-9090</div>
                    </div>

                    <div className='flex contact-group'>
                        <SmartphoneIcon className='contact-icon' />
                        <div className='cel-number t'>(11) 98884-6015</div>
                    </div>

                    <div className='flex contact-group'>
                        <EmailIcon className='contact-icon' />
                        <div className='email t'>contato@cydagodoyxama.com.br</div>
                    </div>
            </div>

            <div className='search'>
                <SearchInput />
            </div>

        <div className='links-uteis'>
                <div className='sh title'>LINKS ÚTEIS</div>
                
                <Link className='t' to='/agenda'>Agenda</Link>
                <Link className='t' to='/cyda-godoy'>Quem é Cyda Godoy?</Link>
                <Link className='t' to='/politica-de-privacidade'>Políticas de Privacidade</Link>
                <Link className='t' to='/politica-de-troca-devolucao'>Políticas de Troca e Devolução</Link>
                <Link className='t' to='/termos-de-uso'>Termos de Uso</Link>
        </div>

    <div className='socials'>
        <div className='sh title'>ACOMPANHE-NOS NAS REDES SOCIAIS</div>
            <div className='socials-icons flex'>
                <div className='facebook'/>
                <div className='instagram' />
                <div className='youtube' />
            </div>
    </div>


        </div>
    </div>
);

export default Footer;