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
          trigger={<button className="btn btn-secondary sm"> Modify</button>}
          position="right center"
        >
          <div>
            <form
              onSubmit={() =>
                this.props.handlePriceChangeSubmit(this.props.item.id)
              }
            >
              <label>
                New Amount:
                <input type="text" onChange={this.props.handleChangePrice} />
              </label>
              <button type="submit" className="btn btn-primary mb-2">
                Submit
              </button>
            </form>
          </div>
        </Popup>
        <button
          className="btn btn-secondary sm"
          onClick={() => this.props.handleDelete(this.props.item.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Item;
