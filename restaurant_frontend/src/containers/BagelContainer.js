import React from "react";
import AllBagels from "../components/AllBagels";
import { Container, Row, Col } from "react-bootstrap";

function BagelContainer() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>This is BAGEL CONTAINER!</h1>
          <AllBagels />
        </Col>
        <Col>
          <h1>ORDER CONTAINER</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default BagelContainer;
