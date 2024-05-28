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
      image: "https://m.media-amazon.com/images/I/51wmswmIrRL._SX342_SY445_.jpg",
      
    },
    {
      id: '67890',
      productName: 'Product B',
      quantity: 1,
      price: 100,
      status: 'Delivered',
      image: "https://m.media-amazon.com/images/I/51gAQo24viL._SY445_SX342_.jpg",
    },
    {
      id: '11223',
      productName: 'Product C',
      quantity: 3,
      price: 75,
      status: 'Processing',
      image: "https://m.media-amazon.com/images/I/51nZpJeLf4L._SY445_SX342_.jpg"
    },
  ];

  return (
    <div className="orders-container">
      <div className="orders-list">
        {orders.map((order) => (
          <div key={order.id} className="order-item">
            <div className="order-details">
              <img src={order.image} alt={order.productName} className="order-image" />
              <div className="order-info">
                <div className="order-id-product-quantity">
                  <div className="order-product"><strong></strong> {order.productName}</div>
                  <div className="order-quantity"><strong>Quantity:</strong> {order.quantity}</div>
                </div>
                <div className="order-price"><strong>Price:</strong> ${order.price}</div>
                <div className="order-price-status">
                  <div className="order-id"><strong>Order ID:</strong> {order.id}</div>
                  <div className="order-status"><strong>Status:</strong> {order.status}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
