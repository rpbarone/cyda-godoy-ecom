import React from 'react';
import { Route } from 'react-router-dom';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../../pages/collection/collection.component';

import './shop.styles.scss';

const ShopPage = ({ match }) => {
return (
    <div className='shop-page block'>
        <Route exact path={`${match.path}`} component={ CollectionOverview } />
        <Route path={`${match.path}/:collectionId`} component={ CollectionPage } />
    </div>
)

}

export default ShopPage;