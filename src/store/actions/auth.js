import axios from 'axios';
import apiConfig from '../../apiKeys';

export const auth = (email, password, isSignup) => {
    return dispatch => { // thunking!
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };

        let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=' + apiConfig.googleKey;

        axios.post(url, authData)
        .then(response => {
            console.log(response);
        });
    }
}