import menuActionsTypes from './menu.types';

const INITIAL_STATE = {
    menuHidden: true
}

const menuReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case menuActionsTypes.TOGGLE_MENU_HIDDEN: 
        return {
            ...state,
            menuHidden: !state.menuHidden
        };

        default: 
            return state;
    };
}

export default menuReducer;