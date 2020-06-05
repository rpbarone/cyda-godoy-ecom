import React from 'react';

import './alert.styles.scss';
import { ReactComponent as ErrorIcon } from '../../assets/icons/error.svg';
import { ReactComponent as SuccessIcon } from '../../assets/icons/success.svg';


const Alert = ({ status, msg }) => {

return(
    <div className={`alert-${status} flex`}>
        <div className={`${status}-prepend flex`}>
            {
                status === 'error' ?
                <ErrorIcon className='error-icon' />
                :
                <SuccessIcon className='success-icon' />
            }
            
        </div>

        <div className={`t t-${status}`}>{ msg }</div>
    </div>
)};

export default Alert;