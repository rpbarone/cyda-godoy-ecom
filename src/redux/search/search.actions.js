import { searchActionTypes } from './search.types';

export const setCurrentSearch = search => ({
    type: searchActionTypes.SET_CURRENT_SEARCH,
    payload: search
})