import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionItem from '../collection-item/collection-item.component';

import { selectCollectionsForMap } from '../../redux/shop/shop.selectors';
import './related-products.styles.scss';

const RelatedProducts = ({ items, category, norepeat }) => {
  let related = Object.values(
    items.find(item => item.title.startsWith(category)).items
    )

  return(
  <div className='related-products'>
    <h2 className='title h'>PRODUTOS RELACIONADOS</h2>
    <div className='sort-items'>
    {
      related.filter((item) => item.id !== norepeat )
      .filter((item, id) => id < 4).map(item => (
        <CollectionItem key={item.id} item={item} />
      ))
    }
    </div>
  </div>
)};

const mapStateToProps = createStructuredSelector({
  items: selectCollectionsForMap
})

export default connect(mapStateToProps)(RelatedProducts);