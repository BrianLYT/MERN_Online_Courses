import React from "react";
import { Switch, Route } from "react-router-dom";
import HomeComponent from "./components/home-component";
import NavComponent from "./components/nav-component";
import RegisterComponent from "./components/register-component";

function App() {
  return (
    <div>
      <NavComponent />
      <Switch>
        <Route path="/" exact>
          <HomeComponent />
        </Route>
        <Route path="/register" exact>
          <RegisterComponent />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
