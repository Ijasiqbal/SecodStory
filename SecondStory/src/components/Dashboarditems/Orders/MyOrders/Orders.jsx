import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Orders.module.css';

function Orders() {
  const orders = [
    {
      id: '12345',
      productName: "It Ends With Us",
      author: "Colleen Hoover",
      price: 256,
      image: "https://m.media-amazon.com/images/I/813aV273-rL._SL1500_.jpg",
      status: 'Shipped',
    },
    {
      id: '67890',
      productName: 'You Like It Darker',
      author: 'Stephen King',
      price: 199,
      status: 'Delivered',
      image: "https://m.media-amazon.com/images/I/A1wUbK1OkpL._SY425_.jpg",
    },
    {
      id: '11223',
      productName: 'Table For Two: The instant Sunday Times bestseller ',
      author: 'Amor Towles',
      price: 211,
      status: 'Processing',
      image: "https://m.media-amazon.com/images/I/81gD0BQlSrL._SY425_.jpg"
    },
  ];

  return (
    <div className={styles.ordersContainer}>
      <div className={styles.ordersList}>
        {orders.map((order) => (
          <div key={order.id} className={styles.orderItem}>
            <div className={styles.orderDetails}>
              <img src={order.image} alt={order.productName} className={styles.orderImage} />
              <div className={styles.orderInfo}>
                <div className={styles.orderProductnameAuther}>
                  <div className={styles.orderProduct}><h1  className={styles.orderItemInfotitle}>{order.productName}</h1></div>
                  <div className={styles.orderQuantity}><strong>Auther:</strong> {order.author}</div>
                </div>
                <div className={styles.orderPrice}><strong>Price:</strong> Rs. {order.price}</div>
                <div className={styles.orderIdStatus}>
                  <div className={styles.orderId}><strong>Order ID:</strong> {order.id}</div>
                  <div className={styles.orderStatus}><strong>Status:</strong> {order.status}</div>
                </div>
                <Link to={`/order/${order.id}`} className={styles.orderDetailsLink}>View Order Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
