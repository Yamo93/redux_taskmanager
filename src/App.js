import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.scss';

import NavBar from './components/NavBar/NavBar';
import TodoList from './containers/TodoList/TodoList';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';

import * as actions from './store/actions/index';

function App(props) {

  useEffect(() => {
    props.onTryAutoSignup();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar signedin={props.isSignedIn} />
        
        <Switch>
          <Route path="/" exact component={TodoList} />
          <Route path="/login" exact component={() => <Auth signup={false} />} />
          <Route path="/signup" exact component={() => <Auth signup={true} />} />
          <Route path="/logout" exact component={Logout} />
        </Switch>
        {/* <TodoList /> */}
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
