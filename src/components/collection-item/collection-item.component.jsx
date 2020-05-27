import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';

import { addItem } from '../../redux/cart/cart.actions';

import './collection.item-styles.scss';

const CollectionItem = ({ item, addItem, history }) => {
    const { imageUrl, name, price, route, category } = item;
    
    return ( 
        <div className='collection-item'>
        <div
        className='image'
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
        />

        <div className='collection-body sh main-color-bg'>
            <span className='name'>{name}</span>
            <span className='price'>R$ {price},00</span>
        </div>

        <div className='collection-footer sub-color-bg'>
        <CustomButton onClick={() => addItem(item)} inverted> ADICIONAR AO CARRINHO </CustomButton>
        <CustomButton onClick={() => history.push(`/produto/${category}/${route}`)}> VER MAIS DETALHES </CustomButton>
        </div>
        
    </div> 
    )
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default withRouter(connect(null, mapDispatchToProps)(CollectionItem));
