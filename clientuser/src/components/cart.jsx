import React, { Component } from "react";
import { connect } from "react-redux";
import { checkout, fetchItems } from "../redux";
import { Link } from "react-router-dom";

class Cart extends Component {
  render() {
    const cart = this.props.cart;
    const items = this.props.selected;
    return (
      <div>
        <div className="list-group">
          {items.map(item => (
            <a className="list-group-item list-group-item-action">
              <div className="container-md d-flex justify-content-around">
                <span className="badge badge-light border border-primary">
                  {item.name}
                </span>
                <span className="badge badge-light border border-primary">
                  {item.price}
                </span>
                <span className="badge badge-light border border-primary">
                  {item.quantity}
                </span>
              </div>
            </a>
          ))}
        </div>
        <div className="d-flex align-items center justify-content-around">
          {cart ? (
            <Link to="/receipt">
              <button
                className="btn btn-danger btn-sm"
                onClick={() => this.props.checkout(this.props.selected)}
              >
                Checkout
              </button>
            </Link>
          ) : (
            "Nothing in Cart!"
          )}
        </div>
        <hr></hr>
        <div className="d-flex align-items center justify-content-around">
          <Link to="/shop">
            <button
              className="btn btn-outline-success"
              onClick={this.props.fetchItems}
            >
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selected: state.data.selected,
    cart: state.data.cart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    checkout: selected => dispatch(checkout(selected)),
    fetch: () => dispatch(fetchItems())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
