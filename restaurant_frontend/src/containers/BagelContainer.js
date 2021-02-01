import React from "react";
import AllBagels from "../components/AllBagels";
import Order from "../components/Order";
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
          <Order />
        </Col>
      </Row>
    </Container>
  );
}

export default BagelContainer;
