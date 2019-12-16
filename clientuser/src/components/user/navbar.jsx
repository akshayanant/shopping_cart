import React, { Component } from "react";
class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          Items Count : {this.props.count}
        </nav>
      </div>
    );
  }
}

export default NavBar;
