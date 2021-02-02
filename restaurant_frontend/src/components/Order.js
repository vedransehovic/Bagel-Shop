import React from "react";
import { useSelector } from "react-redux";

function Order() {
  const order = useSelector((state) => state.order);

  return (
    <div>
      <h1>Order:</h1>
      {order.map((singleOrder, index) => {
        return (
          <div key={index}>
            <h3>
              {singleOrder.name} - {singleOrder.ordered} x $
              {singleOrder.price / 100}
            </h3>
          </div>
        );
      })}
    </div>
  );
}

export default Order;
