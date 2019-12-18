import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemsList from "./itemsList";
import Cart from "./cart";
import Receipt from "./receipt";
import NavBar from "./navbar";
import Home from "./home";

class Container extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/shop" component={ItemsList} />
            <Route path="/cart" component={Cart} />
            <Route path="/receipt" component={Receipt} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Container;
