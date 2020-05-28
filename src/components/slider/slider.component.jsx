import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import CollectionItem from '../collection-item/collection-item.component';

import { selectCollections, selectItemsFromAllCollections } from '../../redux/shop/shop.selectors';
import './slider.styles.scss';

const Slider = (props) => {
    const [x, setX] = useState(0);

    let sliderData = [props.children].flat();
    
    const goLeft = () => {
        x === 0 ? setX(-85 * (sliderData.length - 1)) : setX(x + 85);
    }

    const goRight = () => {
        x === -85 * (sliderData.length - 1) ? setX(0) : setX(x - 85);
    }


    return(
        <div className='slider'>
        {
            sliderData.map((item, id) => (
                <div key={id} className='slide' style={{ transform: `translateX(${x}%)`}}>
                    {item}
                </div>
                
            ))
        }
        <button id="goLeft" onClick={goLeft}>&#10092;</button>
        <button id="goRight" onClick={goRight}>&#10093;</button>
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    collection: selectCollections,
})

export default connect(mapStateToProps)(Slider);