import React from 'react';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import 'normalize.css';
import { device } from './breakpoints/breakpoints';


import { Home } from './routes/Home'; 
import { About } from './routes/About';
import { List } from './routes/List';
import { Graph } from './routes/Graph';
import { Gallery } from './routes/Gallery';
import { Progress } from './routes/Progress';
import { Error404 } from './routes/Error404';
// import { About } from './routes/[...]';

import { Logo } from './components/Logo';
import { Title } from './components/Title';
import { NavMenu } from './components/NavMenu';
import { NavMenuItem } from './components/NavMenuItem';
// ! Do i need ReactDOM ? Its huge.
import { ReactDOM } from 'react-dom';

/*
TODO - Fix routing
  ... if I try to go directly to tradleads.jponeil.com/list without doing so from / it gives 404
  ... but maybe this is just a flaw in react-router... i can't remember.

TODO - Add Google Charts
  TODO - Experiment with other charts...
  D3.js
    C3.js - supposed to abstract away a few things to make it easier? huh
  Sigma JS
  https://gionkunz.github.io/chartist-js/


TODO - MAKE EVERTYHING RESPONSIVE, EVERYTHING. Within reason.
*/

function App() {
  return (
    <BrowserRouter>
      <header>
        <Logo />
        <Title />
        <NavMenu>
          <NavMenuItem><Link to="/">Home</Link></NavMenuItem>
          <NavMenuItem><Link to="/about">About</Link></NavMenuItem>
          <NavMenuItem><Link to="/list">List</Link></NavMenuItem>
          <NavMenuItem><Link to="/graph">Graph</Link></NavMenuItem>
          <NavMenuItem><Link to="/gallery">Gallery</Link></NavMenuItem>
          <NavMenuItem><Link to="/amga-progress">AMGA Progress</Link></NavMenuItem>
        </NavMenu>
      </header>
      

      <Switch>
        <Route exact path="/" component={ Home }/>
        <Route path="/about" component={ About } />
        <Route path="/list" component={ List } />
        <Route path="/graph" component={ Graph } />
        <Route path="/gallery" component={ Gallery } />
        <Route path="/amga-progress" component={ Progress } />
        <Route component={ Error404 } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
