import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { reducer } from "./redux/reducer";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import "../node_modules/modern-normalize/modern-normalize.css";
import React, { Component } from "react";
import AdminContainer from "./containers/AdminContainer";
import BagelContainer from "./containers/BagelContainer";
import OrderContainer from "./containers/OrderContainer";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={BagelContainer} />
          <Route exact path="/order" component={OrderContainer} />
          <Route exact path="/admin" component={AdminContainer} />
        </Router>
      </div>
    );
  }
}

export default App;
