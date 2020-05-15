import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({isFacebookSignIn, children, ...otherProps}) => (
    <button 
        className={` ${isFacebookSignIn ? 'facebook-sign-in' : ''} custom-button`} 
        {...otherProps}
    >
        {children}
    </button>
);

export default CustomButton;