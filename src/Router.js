// React, Router
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Routes
import Home from "./pages/Home";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";

const MainRouter = () => (
  <Router>
    <Switch>
      <Route path="/pageOne">
        <PageOne />
      </Route>
      <Route path="/pageTwo">
        <PageTwo />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default MainRouter;
