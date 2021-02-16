import React from "react";
import Comment from "./DescriptionText";

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
        <div>
          <h1>This Is Project Description</h1>
          <h2>{this.state.likes}</h2>
        </div>
        <div>
          <Comment likes={this.state.likes} handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default Description;
