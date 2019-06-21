import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utilities';

const initialState = {
    modalShown: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SHOW_MODAL: return updateObject(state, {modalShown: true});
        case actionTypes.HIDE_MODAL: return updateObject(state, {modalShown: false});
        default: return state;
    }
};

export default reducer;