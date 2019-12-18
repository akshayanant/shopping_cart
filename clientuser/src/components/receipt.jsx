import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchItems } from "../redux";

class Receipt extends Component {
  render() {
    const receipt = this.props.receipt;
    const items = receipt.purchasedItemDetails;
    const totAmount = receipt.totalAmount;
    const display = this.props.display;
    return display ? (
      <div>
        <h1>Receipt</h1>
        <div className="d-flex align-items center justify-content-around">
          <span>Item Name </span>
          <span>Price </span>
          <span>Quantity </span>
          <span>Net Price</span>
        </div>
        <div className="border border-primary list-group">
          {items.map(item => (
            <div className="d-flex align-items center justify-content-around">
              <a className="list-group-item list-group-item-action">
                <div className="d-flex align-items center justify-content-around">
                  <span>{item.item.name} </span>
                  <span>{item.item.price} </span>
                  <span>{item.quantity} </span>
                  <span>{item.netPrice}</span>
                </div>
              </a>
            </div>
          ))}
          <div className="d-flex align-items right justify-content-around">
            <h3> Total Amount - {totAmount}</h3>
          </div>
        </div>
        <div className="d-flex align-items right justify-content-around">
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
    ) : (
      ""
    );
  }
}

const mapStateToProps = state => {
  return {
    display: state.data.showReceipt,
    receipt: state.data.receipt
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchItems: () => dispatch(fetchItems())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Receipt);
