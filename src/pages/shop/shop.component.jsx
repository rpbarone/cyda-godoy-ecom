import React from 'react';
import { Route } from 'react-router-dom'

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import Category from '../../pages/category/category.component';

import './shop.styles.scss';

const ShopPage = ({ match }) => (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={ CollectionOverview } />
        <Route path={`${match.path}:/categoryId`} component={ Category } />
    </div>
)

export default ShopPage;