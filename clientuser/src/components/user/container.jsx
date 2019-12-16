import React, { Component } from "react";
import ItemsList from "./itemsList";
import NavBar from "./navbar";

class Container extends Component {
  state = {
    reload: false,
    items: [],
    count: 0
  };
  newPrice = "";
  newItemName = "";
  newItemPrice = "";

  constructor(props) {
    super(props);
    this.updateCount = this.updateCount.bind(this);
    console.log("constructor");
  }

  componentDidMount() {
    fetch("http://localhost:8080/shoppingcart/user/home/getitems")
      .then(response => response.json())
      .then(data => {
        this.setState({ items: data });
        this.updateCount();
      });
    console.log("componentDidMount");
  }

  updateCount = () => {
    const items = this.state.items;
    this.setState({ count: items.length });
  };

  handleChangePrice = event => {
    this.newPrice = event.target.value;
  };

  handlePriceChangeSubmit = id => {
    const items = this.state.items;
    items.map(item => {
      if (item.id === id) {
        fetch("http://localhost:8080/shoppingcart/admin/home/modifyprice", {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: id,
            price: this.newPrice
          })
        });
      }
    });
  };

  handleAddName = event => {
    this.newItemName = event.target.value;
  };

  handleAddPrice = event => {
    this.newItemPrice = event.target.value;
  };

  handleDelete = id => {
    fetch("http://localhost:8080/shoppingcart/admin/home/delete", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: id
      })
    }).then(() => {
      const items = this.state.items.filter(item => {
        return item.id !== id;
      });
      this.setState({ items: items });
      this.updateCount();
    });
  };

  handleAddItemSubmit = () => {
    fetch("http://localhost:8080/shoppingcart/user/home/additem", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: this.newItemName,
        price: this.newItemPrice
      })
    });
    this.updateCount();
  };

  render() {
    console.log("Render");
    console.log(this.state.items);

    return (
      <div className="container">
        <NavBar count={this.state.count}></NavBar>
        <ItemsList
          items={this.state.items}
          handleAddName={this.handleAddName}
          handleAddPrice={this.handleAddPrice}
          handleAddItemSubmit={this.handleAddItemSubmit}
          handleChangePrice={this.handleChangePrice}
          handlePriceChangeSubmit={this.handlePriceChangeSubmit}
          handleDelete={this.handleDelete}
        ></ItemsList>
      </div>
    );
  }
}

export default Container;
