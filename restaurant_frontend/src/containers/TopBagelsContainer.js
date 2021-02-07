import React from "react";
import TopBagels from "../components/TopBagels";
import NavBar from "../components/NavBar";
import { Container, Row, Col } from "react-bootstrap";

function TopBagelsContainer() {
  return (
    <Container>
      <Row>
        <Col>
          <NavBar />
          <h1>These Are Our Top 3 Bagels!</h1>
          <TopBagels />
        </Col>
      </Row>
    </Container>
  );
}

export default TopBagelsContainer;
