import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCurrentSearch } from '../../redux/search/search.selectors';

import './search-item.styles.scss';

const SearchItem = ({ currentSearch }) => (
    <div className='search-item'>
        { currentSearch.length ?
            currentSearch.map(item => (
                <CollectionItem key={item.id} item={item} />
            ))
            :
            <span className='t'>Nenhum produto foi encontrado.</span>
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentSearch: selectCurrentSearch
})

export default connect(mapStateToProps)(SearchItem);