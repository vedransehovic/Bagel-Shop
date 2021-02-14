import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { deleteBagel } from "../actions/actionsCreator";

function Admin() {
  const bagels = useSelector((state) => state.bagels);
  const dispatch = useDispatch();

  return (
    <div>
      {bagels.map((bagel, index) => {
        return (
          <div key={index}>
            <Card style={{ width: "17rem" }}>
              <Card.Img variant="top" src={bagel.image} alt={bagel.name} />
              <Card.Body>
                <Card.Title>{bagel.name}</Card.Title>
                <Card.Text></Card.Text>
                <Button>Edit</Button>&nbsp;
                <Button onClick={() => dispatch(deleteBagel(bagel.id, index))}>
                  Delete
                </Button>
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

export default Admin;
