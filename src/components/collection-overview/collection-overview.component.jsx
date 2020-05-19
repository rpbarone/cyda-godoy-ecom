import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';

import { selectCollection } from '../../redux/shop/shop.selectors';
import './collection-overview.styles.scss';

const CollectionsOverview = ({ shop }) => (
    <div className='collections-overview'>
        {shop.map(({id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    shop: selectCollection
})

export default connect(mapStateToProps)(CollectionsOverview);