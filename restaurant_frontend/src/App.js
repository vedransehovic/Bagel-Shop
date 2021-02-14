import { BrowserRouter as Router, Route } from "react-router-dom";
import "../node_modules/modern-normalize/modern-normalize.css";
import React, { Component } from "react";
import AdminContainer from "./containers/AdminContainer";
import BagelContainer from "./containers/BagelContainer";
import TopBagelsContainer from "./containers/TopBagelsContainer";
import { connect } from "react-redux";
import { getBagels } from "./actions/actionsCreator";
import Description from "./components/ProjectDescription";

class App extends Component {
  componentDidMount() {
    this.props.getBagels();
  }

  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={BagelContainer} />
          <Route exact path="/top" component={TopBagelsContainer} />
          <Route exact path="/admin" component={AdminContainer} />
          <Route exact path="/description" component={Description} />
        </Router>
      </div>
    );
  }
}

export default connect(null, { getBagels })(App);
