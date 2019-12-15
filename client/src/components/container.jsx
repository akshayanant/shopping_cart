import React, { Component } from "react";
import NavBar from "./navbar";

class Container extends Component {
  state = {
    items: []
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch("http://localhost:8080/shoppingcart/admin/home/getitems")
      .then(response => response.json())
      .then(data => {
        this.setState({ items: data });
        console.log(this.state.message);
      });
  }

  render() {
    const items = this.state.items;
    return (
      <div>
        <NavBar />
        {items.map(item => (
          <div key={item.id}>
            {
              <div>
                <span>{item.name} - </span>
                <span>{item.price} </span>
                <button>Buy</button>
              </div>
            }
          </div>
        ))}
      </div>
    );
  }
}

export default Container;
