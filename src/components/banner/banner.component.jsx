import React from 'react';

import './banner.styles.scss';

const Banner = ({ type, title, subtitle, description, description_2, imageUrl }) => (
    <div className='banner'
    style={{
        backgroundImage: `url(${ imageUrl })`
    }}
    >
        <div className='overlay'>
            <div className='content'>
                { type ? <p className='type h'>{ type }</p> : null }
                <p className='title hl'>{ title }</p>
                <p className='subtitle t'>{ subtitle }</p>
                <p className='description t'>{ description }</p>
                { description_2 ? <p className='description t'>{ description_2 }</p> : null }
            </div>
        </div>
    </div>
);

export default Banner;