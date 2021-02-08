import React from "react";
import { useDispatch } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { createBagel } from "../actions/actionsCreator";

function AdminForm() {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>New Bagel</h1>
      <Form onSubmit={() => dispatch(createBagel(e))}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Bagel Name</Form.Label>
          <Form.Control type="text" placeholder="Bagel Name" name="name" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Image:</Form.Label>
          <Form.Control type="text" placeholder="Image" name="image" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Quantity</Form.Label>
          <Form.Control type="text" placeholder="Quantity" name="quantity" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" placeholder="Price" name="price" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Create
        </Button>
      </Form>
    </div>
  );
}

export default AdminForm;
