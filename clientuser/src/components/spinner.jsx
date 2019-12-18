import React, { Component } from "react";

class Spinner extends Component {
  state = {};
  render() {
    return (
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
}

export default Spinner;
