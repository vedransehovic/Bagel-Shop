import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Admin from "../components/Admin";
import AdminForm from "../components/Form";
import { Container, Row, Col } from "react-bootstrap";

class AdminContainer extends Component {
  render() {
    return (
      <div>
        <Container>
          <NavBar />
        </Container>
        <Container>
          <Row>
            <Col>
              <Admin />
            </Col>
            <Col>
              <AdminForm />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AdminContainer;
