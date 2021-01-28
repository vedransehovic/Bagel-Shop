import React from "react";
import { useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";

function AllBagels() {
  const bagels = useSelector((state) => state.bagels);
  return (
    <div>
      {bagels.map((bagel, index) => {
        return (
          <div>
            <Card style={{ width: "15rem" }}>
              <Card.Img
                variant="top"
                src={bagel.image}
                key={bagel.id}
                alt={bagel.name}
              />
              <Card.Body>
                <Card.Title>{bagel.name}</Card.Title>
                <Card.Text>
                  Price: {bagel.price}
                  <br />
                  Quantity: {bagel.quantity}
                </Card.Text>
                <Button variant="primary">Vote Favorite</Button>
              </Card.Body>
            </Card>
            <p></p>
          </div>
        );
      })}
    </div>
  );
}

export default AllBagels;
