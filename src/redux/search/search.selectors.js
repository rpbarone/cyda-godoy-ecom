import { createSelector } from 'reselect';

const selectSearch = state => state.search;

export const selectCurrentSearch = createSelector(
    [selectSearch],
    search => search.currentSearch
)