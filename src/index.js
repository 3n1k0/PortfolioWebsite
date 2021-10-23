import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import { BrowserRouter, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <div>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route compontent={Notfound} />
      </Switch>
    </BrowserRouter>
  </div>,
  document.getElementById("root")
);
