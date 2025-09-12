import React from "react";

const Order = ({ order }) => {
  return (
    <div>
      <h2>Thank you for your order🥰</h2>
      <p>
        your order has been placed successfully, you will recieve an email
        confirmation.
      </p>
      <div>
        <h3>order summary</h3>
        <p>order number: {order.OrderNumber}</p>
      </div>
    </div>
  );
};

export default Order;
