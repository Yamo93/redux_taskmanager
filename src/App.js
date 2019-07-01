import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';

import NavBar from './components/NavBar/NavBar';
import TodoList from './containers/TodoList/TodoList';
import Auth from './containers/Auth/Auth';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        
        <Switch>
          <Route path="/" exact component={TodoList} />
          <Route path="/login" exact component={() => <Auth signup={false} />} />
          <Route path="/signup" exact component={() => <Auth signup={true} />} />
        </Switch>
        {/* <TodoList /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
