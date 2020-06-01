import React, { useEffect } from 'react';

import SearchItem from '../../components/search-item/search-item.component';
import './search-result.styles.scss';

const SearchResult = () => {

    useEffect(() => {
        window.scrollTo({
            top: 288,
            left: 0,
            behavior: 'smooth'
          });
      }, [])    

return(
    <div className='search-result block'>
        <h3 className='title h'>Resultados da Pesquisa</h3>
            <div className='search-item'>
                <SearchItem />
            </div>
    </div>
)};

export default SearchResult;