import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchItems } from "../redux";

class NavBar extends Component {
  render() {
    const cartNotify = this.props.cart;
    const count = this.props.count;
    return (
      <nav>
        <h3>Let's Shop</h3>

        <ul className="nav-links">
          <Link className="link-style" to="/">
            <li>Home</li>
          </Link>

          <Link className="link-style" to="/shop">
            <li>
              <button
                type="button"
                class="btn-outline-info"
                onClick={this.props.fetchItems}
              >
                Shop
              </button>
            </li>
          </Link>
          <Link className="link-style" to="/cart">
            <li>
              <button type="button" class="btn-outline-info">
                My Cart
                {!cartNotify ? (
                  ""
                ) : (
                  <span className="badge badge-danger"> {" " + count}</span>
                )}
              </button>
            </li>
          </Link>
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.data.cart,
    count: state.data.cartCount
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchItems: () => dispatch(fetchItems())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
