import React, { Component } from "react";
import ItemsList from "./itemsList";
import Cart from "./cart";

class Container extends Component {
  render() {
    return (
      <div>
        <ItemsList />
        <Cart />
      </div>
    );
  }
}

export default Container;
