import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PaisListado from "./PaisListado";


export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <PaisListado />
          </Route>
          <Route path="/historico/">
            <Historico />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Inicio() {
  return (
    <div>
      <h2>Inicio</h2>
    </div>
  );
}

function Historico() {
  return (
    <div>
      <h2>Listado histórico</h2>
    </div>
  );
}