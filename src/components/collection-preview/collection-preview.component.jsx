import React from 'react';
import { withRouter } from 'react-router-dom'

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, routeName, items, history }) => (
    <div className='collection-preview'>
        <div onClick={() => history.push(`/produtos/${routeName}`)} className='collection-name'>
            <h1 className='title h'> { title.toUpperCase() } </h1>
            <button className='btn-see-all t'
            onClick={() => history.push(`/produtos/${routeName}`)}>
                Ver todos os <span className='type'> {
                    title.match(/[a-z]+/) == 'curumim' ?
                    'fitoflorais infantis'
                    :
                    title.match(/[a-z]+/)
                } &#10132;</span>
            </button>
        </div>
        <div className='preview'>
            {Object.values(items)
                .filter((item, idx) => idx < 4)
                .map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))
            }
        </div>
    </div>
);



export default withRouter(CollectionPreview);

