import banhos from '../../assets/category/banhos.JPG';
import fitoflorais from '../../assets/category/fitoflorais.JPG';
import aromatizadores from '../../assets/category/aromatizadores.JPG';
import sabonetes from '../../assets/category/sabonetes.JPG';
import fitofloraisinfantis from '../../assets/category/florais-infantis.JPG';
import elixir from '../../assets/category/elixir.JPG';

const INITIAL_STATE = {
    sections: [
        {
            title: 'banhos de ervas',
            imageUrl: banhos,
            id: 1,
            linkUrl: 'produtos/banhos-de-ervas'
        },
        {
            title: 'fitoflorais xamânicos',
            imageUrl: fitoflorais,
            id: 2,
            linkUrl: 'produtos/fitoflorais'
        },
        {
            title: 'elixir de cristais',
            imageUrl: elixir,
            id: 3,
            linkUrl: 'produtos/elixir-de-cristais'
        },
        {
            title: 'aromatizadores de ambiente',
            imageUrl: aromatizadores,
            id: 4,
            linkUrl: 'produtos/aromatizadores'
        },
        {
            title: 'sabonetes dos orixás',
            imageUrl: sabonetes,
            id: 5,
            size: '',
            linkUrl: 'produtos/sabonetes-dos-orixas'
        },
        {
            title: 'fitoflorais infantis',
            imageUrl: fitofloraisinfantis,
            id: 6,
            size: '',
            linkUrl: 'produtos/curumim-fitoflorais-infantis'
        }
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.types) {        
        default:
            return state;
    }
}

export default directoryReducer;
