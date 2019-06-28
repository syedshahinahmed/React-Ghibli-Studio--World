import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import Contact from "./Contact";

const Router = () => (
  <HashRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/contact" component={Contact} />
    </Switch>
  </HashRouter>
);

export default Router;
