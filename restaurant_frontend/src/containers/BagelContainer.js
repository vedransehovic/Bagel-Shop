import React, { Component } from "react";
import { connect } from "react-redux";

class BagelContainer extends Component {
  state = {
    bagels: [],
  };

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/bagels")
      .then((res) => res.json())
      .then((data) => this.setState({ bagels: data }));
  }

  render() {
    console.log(this.state.bagels);
    console.log(this.props.bagels);
    return (
      <div>
        <h1>This is Bagel Container</h1>
        {this.state.bagels.map((bagel, index) => {
          return (
            <div>
              <p key={index}>
                {bagel.name}
                <br />
                <img
                  key={index}
                  src={bagel.image}
                  alt={bagel.name}
                  width="175px"
                ></img>
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  bagels: state.bagels,
});

export default connect(mapStateToProps)(BagelContainer);
