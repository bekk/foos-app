import * as React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Main } from "./Main";
import { Users } from "./Users";
import { Ranking } from "./Ranking";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Matches</Link>
            </li>
            <li>
              <Link to="/users/">Opprett bruker</Link>
            </li>
            <li>
              <Link to="/ranking/">Ranking</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={Main} />
        <Route path="/users/" component={Users} />
        <Route path="/ranking/" component={Ranking} />
      </div>
    </Router>
  );
}

export default App;
