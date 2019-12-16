import React, { Component } from "react";
import Popup from "reactjs-popup";

class Item extends Component {
  render() {
    return (
      <div className="container-md d-flex justify-content-around">
        <span className="badge m-2 badge- border border-primary">
          {this.props.item.name}
        </span>
        <span className="badge m-2 badge- border border-primary">
          {this.props.item.price}{" "}
        </span>
        <Popup
          className="container"
          trigger={<button className="btn btn-secondary sm"> Buy </button>}
          position="right center"
        >
          <div>
            <form
              onSubmit={() =>
                this.props.handlePriceChangeSubmit(this.props.item.id)
              }
            >
              <label>
                Quantity:
                <input type="text" onChange={this.props.handleChangePrice} />
              </label>
              <input type="submit" value="Add" />
            </form>
          </div>
        </Popup>
      </div>
    );
  }
}

export default Item;
