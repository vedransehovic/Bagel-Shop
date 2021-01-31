import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Button, InputGroup, FormControl } from "react-bootstrap";
import { addToOrder } from "../actions/actionsCreator";

function AllBagels() {
  const bagels = useSelector((state) => state.bagels);
  const order = useSelector((state) => state.order);
  const dispatch = useDispatch();
  return (
    <div>
      {bagels.map((bagel, index) => {
        return (
          <div>
            <Card style={{ width: "17rem" }}>
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
                <br />
                <br />
                <div>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <Button variant="outline-secondary">Remove</Button>
                    </InputGroup.Prepend>
                    <FormControl
                      aria-describedby="basic-addon1"
                      key={bagel.id}
                      value={bagel.order}
                    />
                    <Button
                      variant="outline-secondary"
                      onClick={() => dispatch(addToOrder(bagel))}
                    >
                      Add
                    </Button>
                  </InputGroup>
                </div>
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
