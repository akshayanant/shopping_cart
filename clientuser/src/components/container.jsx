import React, { Component } from "react";
import ItemsList from "./itemsList";
import Cart from "./cart";
import Receipt from "./receipt";

class Container extends Component {
  render() {
    return (
      <div>
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
