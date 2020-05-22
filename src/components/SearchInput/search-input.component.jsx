import React from 'react';

import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import './search-input.styles.scss';

const SearchInput = () => (
    <div className='search flex'>
        <input className='search-input t' type='text' placeholder='Procure por um produto...' />
        <SearchIcon className='icon main-color-bg' />
    </div>
);

export default SearchInput;