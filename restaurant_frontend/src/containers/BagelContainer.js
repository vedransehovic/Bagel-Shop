import React from "react";
import AllBagels from "../components/AllBagels";
import NavBar from "../components/NavBar";
import Order from "../components/Order";
import { Container, Row, Col } from "react-bootstrap";

function BagelContainer() {
  return (
    <div>
      <Container>
        <NavBar />
      </Container>
      <Container>
        <Row>
          <Col>
            <AllBagels />
          </Col>
          <Col>
            <Order />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BagelContainer;
