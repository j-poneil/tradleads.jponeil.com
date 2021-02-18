
import './styles/App.css';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Home } from './routes/Home'; 
import { About } from './routes/About';
import { List } from './routes/List';
import { Graph } from './routes/Graph';
import { Gallery } from './routes/Gallery';
import { Progress } from './routes/Progress';
import { Error404 } from './routes/Error404';
// import { About } from './routes/[...]';

/*
TODO - Fix routing
... if I try to go directly to tradleads.jponeil.com/list without doing so from / it gives 404
TODO - Replace the ugly CSS that I initially used on purpose, maybe do that after I have worked on the other routes/pages/components first
*/

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
        <Route exact path="/" component={ Home }/>
        <Route exact path="/about" component={ About } />
        <Route exact path="/list" component={ List } />
        <Route exact path="/graph" component={ Graph } />
        <Route exact path="/gallery" component={ Gallery } />
        <Route exact path="/amga-progress" component={ Progress } />
        <Route component={ Error404 } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
