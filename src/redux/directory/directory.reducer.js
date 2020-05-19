
const INITIAL_STATE = {
    sections: [
        {
            title: 'banho de ervas',
            imageUrl: 'https://i.ibb.co/4J1SK7t/banhos-de-ervas.jpg',
            id: 1,
            linkUrl: 'banhos-de-ervas'
        },
        {
            title: 'fitoflorais',
            imageUrl: 'https://i.ibb.co/2MmJPvn/fitoflorais.png',
            id: 2,
            linkUrl: 'fitoflorais'
        },
        {
            title: 'elixir de cristais',
            imageUrl: 'https://i.ibb.co/hcCs7GL/elixir-de-cristais.png',
            id: 3,
            linkUrl: 'elixir-de-cristais'
        },
        {
            title: 'aromatizadores de ambiente',
            imageUrl: 'https://i.ibb.co/MMHQGLB/aromatizadores.jpg',
            id: 4,
            linkUrl: 'aromatizadores'
        },
        {
            title: 'gel de ervas',
            imageUrl: 'https://i.ibb.co/sJDZT6j/gel-de-ervas.jpg',
            id: 5,
            linkUrl: 'gel-de-ervas'
        },
        {
            title: 'óleo de ervas',
            imageUrl: 'https://i.ibb.co/5rNpLyB/oleos-de-ervas.jpg',
            id: 6,
            linkUrl: 'oleos-de-ervas'
        },
        {
            title: 'sabonetes dos orixás',
            imageUrl: 'https://i.ibb.co/1nTRZ3N/sabonetes.jpg',
            id: 7,
            size: 'large',
            linkUrl: 'sabonetes-dos-orixas'
        },
        {
            title: 'pulseiras',
            imageUrl: 'https://i.ibb.co/HYVdCpX/pulseiras.png',
            id: 8,
            size: 'large',
            linkUrl: 'pulseiras'
        },
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.types) {        
        default:
            return state;
    }
}

export default directoryReducer;
