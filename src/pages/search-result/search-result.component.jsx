import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';


import SearchItem from '../../components/search-item/search-item.component';
import './search-result.styles.scss';

const SearchResult = ({ match }) => {

    useEffect(() => {
        window.scrollTo({
            top: 288,
            left: 0,
            behavior: 'auto'
          });
      }, [])    

return(
    <div className='search-result block'>
        <h3 className='title h'>Resultados da Pesquisa</h3>
            <div className='search-item'>
                <Route exact path={`${match.path}/:searchId`} 
                component={ SearchItem } />
            </div>
    </div>
)};

export default SearchResult;