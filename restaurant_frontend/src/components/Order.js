import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {updateOrder } from "../actions/actionsCreator";
import { Button } from "react-bootstrap";

function Order() {
  const order = useSelector((state) => state.order);
  const dispatch = useDispatch()
  let total = 0;

  return (
    <div>
      {order.map((singleOrder, index) => {
        total = total + singleOrder.ordered * singleOrder.price;
        return (
          <div key={index}>
            <h3>
              {singleOrder.name} - {singleOrder.ordered} x $
              {singleOrder.price / 100}
            </h3>
          </div>
        );
      })}
      <h1>Total: ${total / 100}</h1>
      <Button onClick={() => dispatch(updateOrder(order))}>PURCHASE</Button>
    </div>
  );
}

export default Order;
