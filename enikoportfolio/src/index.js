import React from "react";
import ReactDOM from "react-dom";
import Home from "./Pages/Main";
import About from "./Pages/Aboutme";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";
import Notfound from "./Pages/Notfound";
import { BrowserRouter, Switch, Route } from "react-router-dom";


ReactDOM.render(
  <div>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/portfolio" exact compontent={Portfolio} />
        <Route compontent={Notfound} />
      </Switch>
    </BrowserRouter>
  </div>,
  document.getElementById("root")
);
