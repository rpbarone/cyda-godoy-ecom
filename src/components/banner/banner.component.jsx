import React from 'react';
import { Link } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component'
import './banner.styles.scss';

const Banner = ({ type, title, subtitle, description, 
    description_2, imageUrl, scratchInfo, btnAgenda, btnOffer }) => (
    <div className='banner'
    style={{
        backgroundImage: `url(${ imageUrl })`
    }}
    >
        <div className='overlay'>
            <div className='content'>
                { type ? <p className='type h'>{ type }</p> : null }
                <p className='title hl'>{ title }</p>
                <p className='subtitle sh'>{ subtitle }</p>
                { scratchInfo ? <p className='scratch sh'>{ scratchInfo }</p> : null}
                <p className='description sh'>{ description }</p>
                { description_2 ? <p className='description sh'>{ description_2 }</p> : null }
                { btnAgenda ? 
                    <Link className='btn-promo' to='/agenda'>
                        <CustomButton inverted>{ btnAgenda }</CustomButton>
                    </Link>
                : null }
                
                { btnOffer ? 
                    <Link className='btn-promo' to='/oferta'>
                        <CustomButton inverted>{ btnOffer }</CustomButton>
                    </Link>
                : null }
            </div>
        </div>
    </div>
);

export default Banner;