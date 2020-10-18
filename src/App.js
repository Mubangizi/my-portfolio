import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";
import Portfolio from "./components/Portfolio";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/portfolio" component={Portfolio} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
