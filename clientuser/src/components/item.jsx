import React, { Component } from "react";
import { connect } from "react-redux";

import { addToCart } from "./../redux";

class Item extends Component {
  render() {
    return (
      <div>
        <span>{this.props.item.name} - </span>
        <span>{this.props.item.price}</span>
        <button onClick={() => this.props.addToCart(this.props.item)}>
          Add To Cart
        </button>
        <hr></hr>
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
