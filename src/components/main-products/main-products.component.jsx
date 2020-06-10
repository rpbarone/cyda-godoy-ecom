import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionItem from '../../components/collection-item/collection-item.component';
import Slider from '../../components/slider/slider.component';

import { selectCollections } from '../../redux/shop/shop.selectors';
import '../../redux/shop/shop.selectors';
import './main-products.styles.scss';

const MainProducts = ({ collection }) => {

    const { banhos, fitoflorais, elixir, sabonetes } = collection;   
    

return (
    <div className='main-products'>
        <h1 className='title hl'>MAIS VENDIDOS</h1>

        <div className='slider block'>
            
                <Slider slideWidth={100} slideQtd={3} interval={3000}>
                    <CollectionItem key={collection.id} item={banhos.items.banho_sete_ervas } />
                    <CollectionItem key={collection.id} item={elixir.items.elixir_ansiedade } />
                    <CollectionItem key={collection.id} item={fitoflorais.items.fitofloral_calma } />
                    <CollectionItem key={collection.id} item={sabonetes.items.sabonete_oxumare } />
                    <CollectionItem key={collection.id} item={banhos.items.banho_limpeza } />
                    <CollectionItem key={collection.id} item={fitoflorais.items.fitofloral_sos } />
                    <CollectionItem key={collection.id} item={elixir.items.elixir_protecao } />
                    <CollectionItem key={collection.id} item={elixir.items.elixir_insonia } />
                </Slider>  
            
        </div>
    </div>
)
};

const mapStateToProps = createStructuredSelector({
    collection: selectCollections,
})

export default connect(mapStateToProps)(MainProducts);