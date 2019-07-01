import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { updateObject, checkValidity } from '../../shared/utilities';

import './Auth.scss';

import * as actions from '../../store/actions/index';

import Input from '../../components/Input/Input';

import Button from '../../components/Button/Button';

class Auth extends Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: this.props.signup ? 'Choose a Mail Address' : 'Enter Your Mail Address'
                }, 
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: this.props.signup ? 'Choose a Password' : 'Enter Your Password'
                }, 
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        },
        isSignup: this.props.signup
    };

    componentDidMount() {
        if (this.props.authRedirectPath !== '/') {
            this.props.onSetAuthRedirectPath();
        }
    }

    inputChangedHandler = (event, controlName) => {
        const updatedControls = updateObject(this.state.controls, {
            [controlName]: updateObject(this.state.controls[controlName], {
                value: event.target.value,
                valid: checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            })
        });

        this.setState({controls: updatedControls});
    }

    submitHandler = (event) => {
        event.preventDefault(); // prevent reloading of page
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup);
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }

        let form = formElementsArray.map(formElement => (
            <Input 
                key={formElement.id} 
                elementType={formElement.config.elementType} 
                elementConfig={formElement.config.elementConfig} 
                value={formElement.value} 
                invalid={!formElement.config.valid} 
                shouldValidate={formElement.config.validation} 
                touched={formElement.config.touched} 
                changed={(event) => this.inputChangedHandler(event, formElement.id)}
            />
        ));

        let authRedirect = null;
        if( this.props.isAuthenticated) {
            authRedirect = <Redirect to={this.props.authRedirectPath} />
        }

        return (
            <div className="auth">
                {authRedirect}
                <h1>{this.state.isSignup ? 'Sign Up' : 'Login'}</h1>
                <form onSubmit={this.submitHandler}>
                    {form}
                    <Button>{this.state.isSignup ? 'Sign Up' : 'Login'}</Button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        authRedirectPath: state.auth.authRedirectPath
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup)),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);