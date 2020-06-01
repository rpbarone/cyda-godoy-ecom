import { searchActionTypes } from './search.types';

const INITIAL_STATE = {
    setCurrentSearch: null
};

const searchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case searchActionTypes.SET_CURRENT_SEARCH:
        return {
            ...state,
            currentSearch: action.payload
        };

        default:
            return state; 
    }
};

export default searchReducer;