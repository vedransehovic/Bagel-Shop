import React, { Component } from "react";
import Order from "../components/Order";

class OrderContainer extends Component {
  render() {
    return (
      <div>
        <h1>This is ORDER CONTAINER!</h1>;
        <Order />
      </div>
    );
  }
}

export default OrderContainer;
