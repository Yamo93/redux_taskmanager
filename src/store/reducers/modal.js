import * as actionTypes from '../actions/actionTypes';

const initialState = {
    modalShown: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SHOW_MODAL:
            return {
                ...state,
                modalShown: true
            };
        case actionTypes.HIDE_MODAL:
            return {
                ...state,
                modalShown: false
            };

        default: return state;
    }
};

export default reducer;