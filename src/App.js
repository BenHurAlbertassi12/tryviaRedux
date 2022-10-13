import React from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './trivia.png';
import './App.css';
import Login from './pages/Login';
import Game from './pages/Game';
import Settings from './pages/Settings';
import Feedback from './pages/Feedback';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <p>SUA VEZ</p>
        <div>
          <Switch>
            <Route exact path="/" component={ Login } />
            <Route exact path="/game" component={ Game } />
            <Route exact path="/feedback" component={ Feedback } />
            <Route exact path="/settings" component={ Settings } />
          </Switch>
        </div>
      </header>
    </div>
  );
}
