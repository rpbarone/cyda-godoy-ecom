import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './collection.styles.scss';

import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/collection-item.component';
import CustomButton from '../../components/custom-button/custom-button.component';


const CollectionPage = ({ collection, history, match }) => {
    const { items, title } = collection;
    const [page, setPage] = useState(1);
    
    useEffect(() => {
        window.scrollTo({
            top: 120,
            left: 0,
            behavior: 'auto'
          });
      }, [])
    

return (
    <div className='collection-page'>
        <span className='title h'>{ title.toUpperCase() }</span>
        <Link to='/produtos' className='categories t'>
            Ver todas as categorias &#10132;
        </Link>
        <div className='items'>
            {history.location.pathname.match(/[^0-9]$/g) ?

                Object.values(items).filter((item, id) => 
                id <= 11).map(item =>
                <CollectionItem key={item.id} item={item} />)

                :
                
                Object.values(items).filter((item, id) => 
                id >= (12 * history.location.pathname.match(/\d+$/))).map(item =>
                <CollectionItem key={item.id} item={item} />)
            }
        </div>
        <div className='pagination'>
        {Object.values(items).length >= 12 * page ?
            <CustomButton onClick={() => {
                    history.push(`${match.url}/${page}`)
                    setPage(page + 1)

                    window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: 'smooth'
                      });
                }}>
                    Próxima página
            </CustomButton>

            : null
        }

        {history.location.pathname.match(/[0-9]$/g) ?

        <CustomButton onClick={() => {
            history.push(`${match.url}`)
            setPage(page - 1);

            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }}>
            Página Anterior
        </CustomButton> : null

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