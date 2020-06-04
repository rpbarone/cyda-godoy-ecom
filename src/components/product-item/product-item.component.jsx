import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link, withRouter } from 'react-router-dom';
import {
    EmailShareButton,
    FacebookShareButton,
    PinterestShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
  } from "react-share";

  import {
    EmailIcon,
    FacebookIcon,
    PinterestIcon,
    TelegramIcon,
    TwitterIcon,
    WhatsappIcon,
  } from "react-share";

import CustomButton from '../custom-button/custom-button.component';

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
    category, collectionRoute, tags } = itemCollection;

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
                <div className='description t'>Lorem ipsum lorem ipsum 
                Lorem ipsum lorem ipsumLorem ipsum lorem Lorem ipsum 
                lorem ipsumLorem ipsum lorem ipsum ipsum Lorem ipsum lorem
                psumLorem ipsum lorem ipsum Lorem ipsum lorem ipsumLorem ipsum 
                lorem ipsumLorem ipsum lorem ipsum Lorem ipsum lorem ipsumLorem 
                ipsum lorem ipsumLorem ipsum lorem ipsum Lorem ipsum lorem ipsum
                Lorem ipsum lorem ipsumLorem ipsum lorem ipsum</div>
                <span className='stock sh'>&#10004; Em estoque</span>
                <div className='add-to-cart'>
                    <div className='quantity'>
                        <label className='t'>Quantidade:</label>
                        <input type='number'
                        className='t qtd' min='1' max='20'
                        value={inputQtd} 
                        onChange={e => setQuantity(e.target.value)} />
                    </div>
                    <div className='buttons'>
                    <CustomButton
                    onClick={() => {
                        addItemFromProductPage(itemCollection)
                        clearQuantity()
                        history.push('/finalizar-compra')
                    }}
                    >COMPRAR</CustomButton>
                    </div>
                </div>
                <div className='divider'></div>
                <div className='links t'>
                    <span className='flex category'>Categoria: 
                    <Link to={`${collectionRoute}`} className='st badge less-bg'>
                    { category }</Link>
                    </span>
                    <span className='flex'>Benefícios: 
                    {
                        tags.map((tag, id) => (
                            <span key={id} to='#' className='st badge less-bg'>
                            { tag }</span>
                        ))
                    }
                    </span>  
                </div>
                <div className='socials'>
                    <WhatsappShareButton
                    url={'https://www.facebook.com/espacocydagodoy'}
                    className='share'
                    >
                        <WhatsappIcon size={28} round={true} />
                    </WhatsappShareButton>
                    <FacebookShareButton
                    url={'https://www.facebook.com/espacocydagodoy'}
                    className='share'
                    >
                        <FacebookIcon size={28} round={true} />
                    </FacebookShareButton>
                    <TwitterShareButton
                    url={'https://www.facebook.com/espacocydagodoy'}
                    className='share'
                    >
                        <TwitterIcon size={28} round={true} />
                    </TwitterShareButton>
                    <PinterestShareButton
                    url={'https://www.facebook.com/espacocydagodoy'}
                    className='share'
                    >
                        <PinterestIcon size={28} round={true} />
                    </PinterestShareButton>
                    <TelegramShareButton
                    url={'https://www.facebook.com/espacocydagodoy'}
                    className='share'
                    >
                        <TelegramIcon size={28} round={true} />
                    </TelegramShareButton>
                    <EmailShareButton
                    url={'https://www.facebook.com/espacocydagodoy'}
                    className='share'
                    >
                        <EmailIcon size={28} round={true} />
                    </EmailShareButton>
                    
                </div>
            </div>
        </div>

        <div className='product-details'>
            <div className='menu-details'>
                <span className='title h und-effect'>DESCRIÇÃO</span>
                <span className='title h und-effect'>FORMAS DE PAGAMENTO</span>
                <span className='title h und-effect'>PRAZOS DE ENTREGA</span>
            </div>
            <div className='description-content t'>
                ipsum ipsum Lorem ipsum lorem ipsumLorem ipsum lorem ipsum
                Lorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsum
                Lorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsum
                Lorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsum
                ipsum ipsum Lorem ipsum lorem ipsumLorem ipsum lorem ipsum
                Lorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsum
                Lorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsum
                Lorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsum
                ipsum ipsum Lorem ipsum lorem ipsumLorem ipsum lorem ipsum
                Lorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsum
                Lorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsum
                Lorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsum
            </div>
        </div>
   </div> 
);
}

const mapStateToProps = createStructuredSelector({
    inputQtd: selectInputQtd
})

const mapDispatchToProps = dispatch => ({
    setQuantity: quantity => dispatch(setQuantity(quantity)),
    addItemFromProductPage: item => dispatch(addItemFromProductPage(item)),
    clearQuantity: () => dispatch(clearQuantity())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductItem))