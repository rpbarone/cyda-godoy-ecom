import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'banho de ervas',
                    imageUrl: 'https://i.ibb.co/4J1SK7t/banhos-de-ervas.jpg',
                    id: 1
                },
                {
                    title: 'fitoflorais',
                    imageUrl: 'https://i.ibb.co/2MmJPvn/fitoflorais.png',
                    id: 2
                },
                {
                    title: 'elixir de cristais',
                    imageUrl: 'https://i.ibb.co/hcCs7GL/elixir-de-cristais.png',
                    id: 3
                },
                {
                    title: 'aromatizadores de ambiente',
                    imageUrl: 'https://i.ibb.co/MMHQGLB/aromatizadores.jpg',
                    id: 4
                },
                {
                    title: 'gel de ervas',
                    imageUrl: 'https://i.ibb.co/sJDZT6j/gel-de-ervas.jpg',
                    id: 5
                },
                {
                    title: 'óleo de ervas',
                    imageUrl: 'https://i.ibb.co/5rNpLyB/oleos-de-ervas.jpg',
                    id: 6
                },
                {
                    title: 'sabonetes dos orixás',
                    imageUrl: 'https://i.ibb.co/1nTRZ3N/sabonetes.jpg',
                    id: 7,
                    size: 'large'
                },
                {
                    title: 'pulseiras',
                    imageUrl: 'https://i.ibb.co/HYVdCpX/pulseiras.png',
                    id: 8,
                    size: 'large'
                },
            ]
        }
    }

    render() {
        return(
            <div className='directory-menu'>
                {this.state.sections.map(({title, imageUrl, id, size}) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                ))}
            </div>
        )
    }
}

export default Directory;