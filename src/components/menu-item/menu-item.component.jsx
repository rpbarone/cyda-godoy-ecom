import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, size, history, linkUrl, match }) => (
    <div
     className={`${size} menu-item flex`}
     onClick={() => history.push(`${match.url}${linkUrl}`)}
     >
        <div
        className='background-image'
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
        />

        <div className='content main-color-bg'>
            <h1 className='title sh main-color-bg'>{title.toUpperCase()}</h1>
            <span className='subtitle T main-color-bg'>LINHA DE PRODUTOS</span>
        </div>
    </div>
)

export default withRouter(MenuItem);
