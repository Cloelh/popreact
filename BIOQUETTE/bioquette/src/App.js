import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";

import Accueil from './Accueil.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="tel">
            <header>
              <div className="left">notif</div>
              <div className="right">
                <div>#</div>
                <div>@</div>
                <div>08h12</div>
              </div>
            </header>

            <div className='link'><Link style={{ textDecoration: 'none', color: '#91B3BC' }} to='./Accueil'>Login</Link></div>

            <Switch>
                <Route exact={true} path="/Accueil" component={Accueil} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
