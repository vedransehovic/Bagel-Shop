import React, { Component } from "react";
import { connect } from "react-redux";

class BagelContainer extends Component {
  render() {
    return (
      <div>
        <h1>This is Bagel Container</h1>
        {this.props.bagels.map((bagel, index) => {
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
