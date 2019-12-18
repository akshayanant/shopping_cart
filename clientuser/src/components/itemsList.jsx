import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchItems } from "../redux";
import Item from "./item";

class ItemsList extends Component {
  render() {
    return (
      <div>
        {this.props.items.map(item => (
          <Item key={item.id} item={item}></Item>
        ))}
        <button onClick={this.props.fetchItems}>Load Data</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.data.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchItems: () => dispatch(fetchItems())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
