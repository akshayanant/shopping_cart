import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchItems } from "../redux";
import Item from "./item";
import Spinner from "./spinner";

class ItemsList extends Component {
  render() {
    const items = this.props.items;
    const loading = this.props.isLoading;
    return (
      <div>
        <h1> Items</h1>
        {!loading ? (
          <div className="list-group">
            {items.map(item => (
              <a className="list-group-item list-group-item-action">
                <Item key={item.id} item={item}></Item>
              </a>
            ))}
          </div>
        ) : (
          <div>
            <Spinner />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.data.items,
    isLoading: state.data.isLoading
  };
};

export default connect(mapStateToProps, null)(ItemsList);
