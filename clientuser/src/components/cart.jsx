import React, { Component } from "react";
import { connect } from "react-redux";
import { checkout } from "../redux";

class Cart extends Component {
  render() {
    return (
      <div>
        <p>Cart</p>
        {this.props.selected.map(item => (
          <div>
            <span>{item.name} - </span>
            <span>{item.price} - </span>
            <span>{item.quantity}</span>
          </div>
        ))}
        <button onClick={() => this.props.checkout(this.props.selected)}>
          Checkout
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selected: state.data.selected
  };
};

const mapDispatchToProps = dispatch => {
  return {
    checkout: selected => dispatch(checkout(selected))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
