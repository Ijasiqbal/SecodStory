import React from 'react';
import './Orders.css';

function Orders() {
  // Sample data for orders
  const orders = [
    {
      id: '12345',
      productName: 'Product A',
      quantity: 2,
      price: 50,
      status: 'Shipped',
    },
    {
      id: '67890',
      productName: 'Product B',
      quantity: 1,
      price: 100,
      status: 'Delivered',
    },
    {
      id: '11223',
      productName: 'Product C',
      quantity: 3,
      price: 75,
      status: 'Processing',
    },
  ];

  return (
    <div className="orders-container">
      <h1>My Orders</h1>
      <div className="orders-list">
        {orders.map((order) => (
          <div key={order.id} className="order-item">
            <div className="order-details">
              <div className="order-id"><strong>Order ID:</strong> {order.id}</div>
              <div className="order-product"><strong>Product:</strong> {order.productName}</div>
              <div className="order-quantity"><strong>Quantity:</strong> {order.quantity}</div>
              <div className="order-price"><strong>Price:</strong> ${order.price}</div>
              <div className="order-status"><strong>Status:</strong> {order.status}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
