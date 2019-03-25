import * as React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Main } from "./Main";
import { Users } from "./Users";

function Index() {
  return <h2>Matches</h2>;
}

function Userss() {
  return <h2>Opprett bruker</h2>;
}

function Ranking() {
  return <h2>Ranking</h2>;
}

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
        <Route path="/raning/" component={Ranking} />
      </div>
    </Router>
  );
}

export default App;
