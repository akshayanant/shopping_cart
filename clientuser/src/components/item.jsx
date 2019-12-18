import React, { Component } from "react";
import { connect } from "react-redux";

import { addToCart } from "./../redux";

class Item extends Component {
  render() {
    return (
      <div className="container-md d-flex justify-content-around">
        <h1 className="badge badge-light border border-primary">
          {this.props.item.name}
        </h1>
        <h1 className="badge badge-light border border-primary">
          {this.props.item.price}
        </h1>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => this.props.addToCart(this.props.item)}
        >
          Add To Cart
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: item => dispatch(addToCart(item))
  };
};

export default connect(null, mapDispatchToProps)(Item);
