import React, { Component } from "react";
import Popup from "reactjs-popup";

import Item from "./item";

class ItemsList extends Component {
  render() {
    const items = this.props.items;
    return (
      <div>
        <div>
          {items.map(item => (
            <Item
              key={item.id}
              item={item}
              handlePriceChangeSubmit={this.props.handlePriceChangeSubmit}
              handleChangePrice={this.props.handleChangePrice}
              handleDelete={this.props.handleDelete}
            ></Item>
          ))}
        </div>
        <div className="container-md d-flex justify-content-around">
          <Popup
            trigger={
              <button className="btn btn-secondary sm"> Add Item</button>
            }
            position="right top"
          >
            <div className="container-md d-flex justify-content-around">
              <form onSubmit={this.props.handleAddItemSubmit}>
                <label>
                  Name:
                  <input type="text" onChange={this.props.handleAddName} />
                </label>
                <label>
                  Price:
                  <input type="text" onChange={this.props.handleAddPrice} />
                </label>
                <button type="submit" className="btn btn-primary mb-2">
                  Submit
                </button>
              </form>
            </div>
          </Popup>
        </div>
      </div>
    );
  }
}

export default ItemsList;
