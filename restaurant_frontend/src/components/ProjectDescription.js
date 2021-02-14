import React from "react";

class Description extends React.Component {
  state = {
    likes: 0,
  };

  handleClick = () => {
    this.setState({
      likes: this.state.likes + 1,
    });
  };

  render() {
    return (
      <div>
        <h1>This Is Project Description</h1>
        <h2>{this.state.likes}</h2>
        <button onClick={this.handleClick}>LIKE ME MORE</button>
      </div>
    );
  }
}

export default Description;
