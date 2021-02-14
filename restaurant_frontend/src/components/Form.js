import React from "react";
import { Button, Form } from "react-bootstrap";

class AdminForm extends React.Component {
  state = {
    name: "",
    image: "",
    quantity: "",
    price: "",
  };

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleImageChange = (event) => {
    this.setState({
      image: event.target.value,
    });
  };

  handleQuantityChange = (event) => {
    this.setState({
      quantity: event.target.value,
    });
  };

  handlePriceChange = (event) => {
    this.setState({
      price: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    //putting info in proper format
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(this.state),
    };
    //fetch
    fetch("http://localhost:3000/api/v1/bagels", configObj)
      .then((response) => response.json())
      .then((object) => {
        this.setState({
          createdBagelName: object.name,
          createdBagelImage: object.image,
          createdBagelQuantity: object.quantity,
          createdBagelPrice: object.price,
        });
      });
  };

  render() {
    return (
      <div>
        <div>
          {this.state.createdBagelName ? <h2>New Bagel Created</h2> : ""}
          {this.state.createdBagelName} <br />
          {this.state.createdBagelQuantity} <br />
          {this.state.createdBagelPrice} <br />
        </div>

        <h1>New Bagel</h1>
        <Form onSubmit={(event) => this.handleSubmit(event)}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Bagel Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              onChange={(event) => this.handleNameChange(event)}
              value={this.state.name}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Image:</Form.Label>
            <Form.Control
              type="text"
              name="image"
              onChange={(event) => this.handleImageChange(event)}
              value={this.state.image}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="text"
              name="quantity"
              onChange={(event) => this.handleQuantityChange(event)}
              value={this.state.quantity}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              name="price"
              onChange={(event) => this.handlePriceChange(event)}
              value={this.state.price}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit">
            Create
          </Button>
        </Form>
      </div>
    );
  }
}

export default AdminForm;
