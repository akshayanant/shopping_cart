import React, { Component } from "react";
import { connect } from "react-redux";

class Receipt extends Component {
  render() {
    const receipt = this.props.receipt;
    const items = receipt.purchasedItemDetails;
    const totAmount = receipt.totalAmount;
    const display = this.props.display;
    return display ? (
      <div>
        <h1>Receipt</h1>
        <div>
          {items.map(item => (
            <div>
              <span>{item.item.name} - </span>
              <span>{item.item.price} - </span>
              <span>{item.quantity} - </span>
              <span>{item.netPrice}</span>
            </div>
          ))}
        </div>
        <h3> Total Amount - {totAmount}</h3>
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
export default connect(mapStateToProps, null)(Receipt);
