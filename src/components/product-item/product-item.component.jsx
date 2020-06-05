import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import SocialShare from '../social-share/social-share.component';
import BadgeTag from '../badge-tag/badge-tag.component';
import Alert from '../alert/alert.component';
import TabNavigation from '../tab-navigation/tab-navigation.component';
import RelatedProducts from '../related-products/related-products.component';

import { setQuantity, addItemFromProductPage, clearQuantity } from '../../redux/cart/cart.actions';
import { selectInputQtd } from '../../redux/cart/cart.selectors';

import './product-item.styles.scss';

const ProductItem = ({ 
    itemCollection, 
    setQuantity, 
    inputQtd, 
    addItemFromProductPage, 
    clearQuantity,
    history }) => {

const { name, price, imageUrl, 
    category, collectionRoute, tags, description} = itemCollection;

const [itemInCart, setItemInCart ] = useState(false);

console.log(itemCollection)
return (
   <div className='product-item block'>
        <div className='item'>
            <div 
            style={{
                backgroundImage: `url(${ imageUrl })`
            }}
            className='product-image' />
            <div className='infos'>
                <h1 className='title h'>{ name }</h1>
                <h3 className='price sh'>R${ price },00</h3>
                <div className='divider'></div>
                <div className='description t'>{ description }</div>
                <span className='stock sh'>&#10004; Em estoque</span>
                <div className='add-to-cart'>
                    <div className='quantity'>
                        <label className='t'>Quantidade:</label>
                        <input type='number'
                        className='t qtd' min='1' max='30'
                        value={inputQtd} 
                        onChange={e => setQuantity(e.target.value)} />
                    </div>
                    {
                        itemInCart === true ?
                        <Alert 
                        msg={'Adicionado ao carrinho com sucesso!'}
                        status={'success'} />
                        :
                        null
                    }
                    <div className='buttons'>
                    <CustomButton
                    onClick={() => {
                        addItemFromProductPage(itemCollection)
                        clearQuantity()
                        setItemInCart(true)
                    }}
                    inverted
                    >ADICIONAR AO CARRINHO</CustomButton>
                    <CustomButton
                    onClick={() => {
                        if (itemInCart) {
                            clearQuantity()
                        } else {
                            addItemFromProductPage(itemCollection)
                            clearQuantity()
                        }
                        history.push('/finalizar-compra')
                    }}
                    >COMPRAR</CustomButton>
                    </div>
                </div>
                <div className='divider'></div>
                <div className='links t'>
                    <span className='flex category'>Categoria:
                    <BadgeTag content={category} redirect={`${collectionRoute}`} /> 
                    </span>
                    <span className='flex'>Benefícios: 
                    {
                        tags.map((tag, id) => (
                            <BadgeTag key={id} content={tag} redirect={'#'} />
                        ))
                    }
                    </span>  
                </div>
                <SocialShare 
                type={'produto'} 
                link={history.location.pathname} />
            </div>
        </div>
        <TabNavigation />
        <RelatedProducts category={category} norepeat={itemCollection.id} />
   </div> 
);
}

const mapStateToProps = createStructuredSelector({
    inputQtd: selectInputQtd
})

const mapDispatchToProps = dispatch => ({
    setQuantity: quantity => dispatch(setQuantity(quantity)),
    addItemFromProductPage: item => dispatch(addItemFromProductPage(item)),
    clearQuantity: () => dispatch(clearQuantity()),
})

export default withRouter(
    connect
    (mapStateToProps, 
    mapDispatchToProps)
    (ProductItem)
    )