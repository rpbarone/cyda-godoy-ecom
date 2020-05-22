import banhos from '../../assets/category/banhos.png';
import fitoflorais from '../../assets/category/florais.jfif';
import aromatizadores from '../../assets/category/aromatizadores.jfif';
import sabonetes from '../../assets/category/sabonetes.jfif';

const INITIAL_STATE = {
    sections: [
        {
            title: 'banhos de ervas',
            imageUrl: banhos,
            id: 1,
            linkUrl: 'banhos-de-ervas'
        },
        {
            title: 'fitoflorais xamânicos',
            imageUrl: aromatizadores,
            id: 2,
            linkUrl: 'fitoflorais'
        },
        {
            title: 'elixir de cristais',
            imageUrl: banhos,
            id: 3,
            linkUrl: 'elixir-de-cristais'
        },
        {
            title: 'aromatizadores de ambiente',
            imageUrl: aromatizadores,
            id: 4,
            linkUrl: 'aromatizadores'
        },
        {
            title: 'sabonetes dos orixás',
            imageUrl: banhos,
            id: 5,
            size: '',
            linkUrl: 'sabonetes-dos-orixas'
        },
        {
            title: 'fitoflorais infantis',
            imageUrl: aromatizadores,
            id: 6,
            size: '',
            linkUrl: 'fitoflorais-infantis'
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
