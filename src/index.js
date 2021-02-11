import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";
import About from "./pages/Aboutme";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Notfound from "./pages/Notfound";
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
