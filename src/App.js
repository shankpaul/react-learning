import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import Header from "./components/common/header";
import Home from "./components/home";
import About from "./components/about";
import PageNotFound from "./components/page_not_found";
import Books from "./components/books";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/books" component={Books} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
