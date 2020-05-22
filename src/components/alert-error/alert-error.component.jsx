import React from 'react';

import './alert-error.styles.scss';
import { ReactComponent as ErrorIcon } from '../../assets/icons/error.svg';

const AlertError = ({ msgError }) => (
    <div className='alert-error flex'>
        <div className='error-prepend flex'>
            <ErrorIcon className='error-icon' />
        </div>

        <div className='t'>{ msgError }</div>
    </div>
);

export default AlertError;