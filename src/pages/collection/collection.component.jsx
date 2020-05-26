import React from 'react';
import { connect } from 'react-redux';

import './collection.styles.scss';

import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = ({ collection }) => {
    const { items, title } = collection;

return (
    <div className='collection-page'>
        <h1 className='title h'>{ title.toUpperCase() }</h1>
        <div className='items'>
            {
                items.map(item => <CollectionItem key={item.id} item={item} />)
            }
        </div>
    </div>
)

}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps)
    return {
    collection: selectCollection(ownProps.match.params.collectionId.match(/\w+/)[0])(state)
}};

export default connect(mapStateToProps)(CollectionPage);