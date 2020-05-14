import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
    <div onClick={() => history.push(`${match.url}${linkUrl}`)} 
    className={`${size} menu-item`}
    >
    <div className='background-image' style={{
      backgroundImage: `url(${imageUrl})`
    }} />
        <div className='content'>
          <div className='title'>{title.toUpperCase()}</div>
          <span className='subtitle'>COMPRE AGORA</span>
        </div>
    </div>
)

export default withRouter(MenuItem);