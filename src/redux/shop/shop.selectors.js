import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collection
);


export const selectCollectionsForMap = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collection => collection[collectionUrlParam]
);

export const selectCollectionItems = collectionUrlParam => itemUrlParam => createSelector(
    [selectCollections],
    collection => {
        let items = collection[collectionUrlParam].items;
        return items[itemUrlParam]
    }
);

export const selectItemsFromAllCollections = createSelector(
    [selectCollections],
    collection => {
        return [
            collection.banhos.items,
            collection.elixir.items,
            collection.fitoflorais.items,
            collection.sabonetes.items,
            collection.aromatizadores.items,
            collection.curumim.items
        ]
    }
)