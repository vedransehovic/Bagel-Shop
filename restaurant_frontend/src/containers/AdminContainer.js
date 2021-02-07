import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Admin from "../components/Admin";

class AdminContainer extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Admin />
      </div>
    );
  }
}

export default AdminContainer;
