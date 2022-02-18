import React from "react";
import { Switch, Route } from "react-router-dom";
import HomeComponent from "./components/home-component";
import NavComponent from "./components/nav-component";

function App() {
  return (
    <div>
      <NavComponent />
      <Switch>
        <Route path="/" exact>
          <HomeComponent />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
