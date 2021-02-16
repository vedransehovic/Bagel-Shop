import React from "react";
import NavBar from "../components/NavBar";
import Comment from "../components/DescriptionText";
import { Container, Row, Col } from "react-bootstrap";

class Description extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <NavBar />
        </Container>
        <Container>
          <Row>
            <Col>
              <Comment />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Description;

// import React from "react";
// import Comment from "./DescriptionText";

// class Description extends React.Component {
//   state = {
//     likes: 0,
//   };

//   handleClick = () => {
//     this.setState({
//       likes: this.state.likes + 1,
//     });
//   };

//   render() {
//     return (
//       <div>
//         <div>
//           <h1>This Is Project Description</h1>
//           <h2>{this.state.likes}</h2>
//         </div>
//         <div>
//           <Comment likes={this.state.likes} handleClick={this.handleClick} />
//         </div>
//       </div>
//     );
//   }
// }

// export default Description;
