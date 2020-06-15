import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './collection.styles.scss';

import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = ({ collection }) => {
    const { items, title } = collection;
    
    useEffect(() => {
        window.scrollTo({
            top: 250,
            left: 0,
            behavior: 'auto'
          });
      }, [])
      

return (
    <div className='collection-page'>
        <span className='title h'>{ title.toUpperCase() }</span>
        <div className='items'>
            {
                Object.values(items).map(item => <CollectionItem key={item.id} item={item} />)
            }
        </div>
    </div>
)

}

const mapStateToProps = (state, ownProps) => {
    return {
    collection: selectCollection(ownProps.match.params.collectionId.match(/\w+/)[0])(state)
}};

export default connect(mapStateToProps)(CollectionPage);