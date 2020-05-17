import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({isFacebookSignIn, inverted, children, ...otherProps}) => (
    <button 
        className={` ${inverted ? 'inverted' : ''} 
        ${isFacebookSignIn ? 'facebook-sign-in' : ''} custom-button`}
        {...otherProps}
    >
        {children}
    </button>
);

export default CustomButton;