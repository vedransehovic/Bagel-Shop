import React from "react";
import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";

function TopBagels() {
  const bagels = useSelector((state) => state.bagels);
  const orderedBagels = bagels
    .sort((a, b) => (a.likes < b.likes ? 1 : -1))
    .slice(0, 3);
  return (
    <div>
      {orderedBagels.map((bagel, index) => {
        return (
          <div>
            <Card style={{ width: "17rem" }}>
              <Card.Img variant="top" src={bagel.image} alt={bagel.name} />
              <Card.Body>
                <Card.Title>{bagel.name}</Card.Title>
                <Card.Text></Card.Text>
                <h1>Votes: {bagel.likes}</h1>
                <br />
                <br />
              </Card.Body>
            </Card>
            <p></p>
          </div>
        );
      })}
    </div>
  );
}

export default TopBagels;
