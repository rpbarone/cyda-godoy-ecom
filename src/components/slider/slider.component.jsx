import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollections } from '../../redux/shop/shop.selectors';
import './slider.styles.scss';

const Slider = (props) => {
    let [x, setX] = useState(0);

    let sliderData = [props.children].flat();

    const goAuto = () => {
        
        if (x === -props.slideWidth * (sliderData.length - props.slideQtd)) {
            setX(0);
            clearInterval(interval)
           } else {
           setX(x - props.slideWidth);
           clearInterval(interval)
           }
           
    }

    let interval = setInterval(goAuto, props.interval);


            const goLeft = () => {
                clearInterval(interval);

                if (x === 0) { 
                    clearInterval(interval);
                    setX(-props.slideWidth * (sliderData.length - props.slideQtd))
        
                } else {
                    clearInterval(interval);
                    setX(x + props.slideWidth);
                }
                
            }
        
            const goRight = () => {
                if (x === -props.slideWidth * (sliderData.length - props.slideQtd)) {
                    clearInterval(interval);
                     setX(0);
                    } else {
                    clearInterval(interval);
                    setX(x - props.slideWidth);
                    }
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
        <button id="goLeft" className='sub-color-bg' onClick={goLeft}>&#10094;</button>
        <button id="goRight" className='sub-color-bg' onClick={goRight}>&#10095;</button>
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    collection: selectCollections,
})

export default connect(mapStateToProps)(Slider);