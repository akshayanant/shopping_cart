import React, { Component } from "react";
import ItemsList from "./itemsList";
import Cart from "./cart";
import Receipt from "./receipt";
import NavBar from "./navbar";

class Container extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <ItemsList />
        <hr></hr>
        <Cart />
        <hr></hr>
        <Receipt />
      </div>
    );
  }
}

export default Container;
