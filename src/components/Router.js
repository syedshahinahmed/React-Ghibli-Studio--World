import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import Contact from "./Contact";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/contact" component={Contact} />
    </Switch>
  </BrowserRouter>
);

export default Router;
