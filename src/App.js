import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';

import NavBar from './components/NavBar/NavBar';
import TodoList from './containers/TodoList/TodoList';
import Auth from './containers/Auth/Auth';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Route path="/" exact component={TodoList} />
        <Route path="/auth" exact component={Auth} />
        {/* <TodoList /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
