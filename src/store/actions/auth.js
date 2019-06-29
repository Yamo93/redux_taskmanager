import axios from 'axios';

export const auth = (email, password, isSignup) => {
    return dispatch => { // thunking!
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };

        let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCb4_fBufI7bBzIO4mZHehklxomfFq5y0A';

        axios.post(url, authData)
        .then(response => {
            console.log(response);
        });
    }
}