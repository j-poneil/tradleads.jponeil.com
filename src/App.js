
import './App.css';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { About } from '';
import { List } from '';
import { Graph } from '';
import { Gallery } from '';
import { Progress } from '';
import { Error404 } from '';
// import { About } from '';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/list">List</Link></li>
          <li><Link to="/graph">Graph</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/amga-progress">AMGA Progress</Link></li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route path="/list">
          <List />
        </Route>
        <Route path="/graph">
          <Graph />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/amga-progress">
          <Progress />
        </Route>
        {/* <Route path="/about">
          <About />
        </Route> */}
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
