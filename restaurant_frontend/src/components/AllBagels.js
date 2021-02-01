import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Button, InputGroup, FormControl, Badge } from "react-bootstrap";
import { addToOrder, removeFromOrder, like } from "../actions/actionsCreator";

function AllBagels() {
  const bagels = useSelector((state) => state.bagels);
  const dispatch = useDispatch();
  return (
    <div>
      {bagels.map((bagel, index) => {
        return (
          <div>
            <Card style={{ width: "17rem" }}>
              <Card.Img variant="top" src={bagel.image} alt={bagel.name} />
              <Card.Body>
                <Card.Title>{bagel.name}</Card.Title>
                <Card.Text>
                  Price: {bagel.price}
                  <br />
                  Quantity: {bagel.quantity}
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => dispatch(like(bagel, index))}
                >
                  Vote Favorite &nbsp;
                  <Badge variant="light">{bagel.likes}</Badge>
                </Button>
                <br />
                <br />
                <div>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <Button
                        variant="outline-secondary"
                        onClick={() => dispatch(removeFromOrder(bagel, index))}
                      >
                        Remove
                      </Button>
                    </InputGroup.Prepend>
                    <FormControl
                      aria-describedby="basic-addon1"
                      key={bagel.id}
                      readOnly
                      value={bagel.ordered}
                    />
                    <Button
                      variant="outline-secondary"
                      onClick={() => dispatch(addToOrder(bagel, index))}
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
