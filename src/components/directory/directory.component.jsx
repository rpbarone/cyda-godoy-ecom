import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../menu-item/menu-item.component';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import './directory.styles.scss';

const Directory = ({ directory }) => (
    <div className='directory-menu block'>
        <div className='directory-title hl sub-color'>PRINCIPAIS CATEGORIAS</div>
        <div className='directory-items'>
            {directory.map(({id, ...otherSectionProps}) => (
                <MenuItem key={id} {...otherSectionProps} />
            ))}
        </div>
    </div>
)
            
const mapStateToProps = createStructuredSelector({
    directory: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);