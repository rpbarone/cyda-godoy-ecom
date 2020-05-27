import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import ProductItem from '../../components/product-item/product-item.component';

import { selectCollectionItems } from '../../redux/shop/shop.selectors';
import './product.styles.scss';

const ProductPage = ({ itemCollection }) => {
    const { id } = itemCollection;

    useEffect(() => {
        window.scrollTo({
            top: 288,
            left: 0,
            behavior: 'smooth'
          });
      }, [])

    return (
    <div className='product-page'>
       <ProductItem key={id} itemCollection={itemCollection} />
    </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    let { productId, categoryId } = ownProps.match.params;
    productId = productId.match(/\w+/g).join("_");

    return ({
        itemCollection: selectCollectionItems(categoryId)(productId)(state)
    })

}

export default connect(mapStateToProps)(ProductPage);