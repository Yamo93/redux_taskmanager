import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utilities';

const initialState = {
    token: null,
    userId: null,
    authRedirectPath: '/'
};

const authSuccess = (state, action) => {
    return updateObject( state, {
        token: action.token,
        userId: action.userId
    });
};

const setAuthRedirectPath = (state, action) => {
    return updateObject(state, { authRedirectPath: action.path });
}

const authLogout = (state, action) => {
    return updateObject(state, { token: null, userId: null });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.SET_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state, action);
        case actionTypes.AUTH_INITIATE_LOGOUT: return authLogout(state, action);
        default: return state;
    }
};

export default reducer;