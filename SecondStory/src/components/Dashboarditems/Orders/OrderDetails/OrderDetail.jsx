import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './OrderDetail.module.css';
import Navbar from '../../../../components/Navbar';
import Footer from '../../../../components/Footer';

function OrderDetails() {
  const { id } = useParams();
  const orders = [
    {
      id: '12345',
      productName: "It Ends With Us",
      author: "Colleen Hoover",
      price: 256,
      image: "https://m.media-amazon.com/images/I/813aV273-rL._SL1500_.jpg",
      status: 'Shipped',
      date: '2023-06-01',
      paymentMethod: 'Credit Card',
      shippingAddress: '123 Main St, Anytown, USA',
      invoice: 'INV12345',
      shipping: 40,
    },
    {
      id: '67890',
      productName: 'You Like It Darker',
      author: 'Stephen King',
      price: 199,
      status: 'Delivered',
      image: "https://m.media-amazon.com/images/I/A1wUbK1OkpL._SY425_.jpg",
      date: '2023-06-02',
      paymentMethod: 'PayPal',
      shippingAddress: '456 Elm St, Othertown, USA',
      invoice: 'INV67890',
      shipping: 40,
    },
    {
      id: '11223',
      productName: 'Table For Two: The instant Sunday Times bestseller ',
      author: 'Amor Towles',
      price: 211,
      status: 'Processing',
      image: "https://m.media-amazon.com/images/I/81gD0BQlSrL._SY425_.jpg",
      date: '2023-06-03',
      paymentMethod: 'Debit Card',
      shippingAddress: '789 Oak St, Anothertown, USA',
      invoice: 'INV11223',
      shipping: 40,
    },
  ];

  const order = orders.find(order => order.id === id);

  if (!order) {
    return <div>Order not found</div>;
  }

  const orderTotal = order.price + order.shipping;

  return (
    <>
    <Navbar/>
    <div className={styles.orderDetailsPage}>
      <h1 className={styles.orderDetailsPageHeading}>Order Details</h1>

      <div className={styles.orderOverview}>
        <div><strong>Ordered on:</strong> {order.date} | <strong>Order ID:</strong> {order.id}</div>
        <div><strong>Invoice:</strong> {order.invoice}</div>
      </div>

      <div className={styles.orderInfoContainer}>
        <div className={styles.orderSection}>
          <h3 className={styles.orderSectionTitle}>Shipping Address</h3>
          <p className={styles.orderSectionContent}>{order.shippingAddress}</p>
        </div>

        <div className={styles.orderSection}>
          <h3 className={styles.orderSectionTitle}>Payment Method</h3>
          <p className={styles.orderSectionContent}>{order.paymentMethod}</p>
        </div>
        
        <div className={styles.orderSection}>
          <h3 className={styles.orderSectionTitle}>Order Summary</h3>
          <div className={styles.orderSummary}>
            <div className={styles.orderSummaryItem}><strong>Item(s) Subtotal:</strong> {order.price}</div>
            <div className={styles.orderSummaryItem}><strong>Shipping:</strong> {order.shipping}</div>
            <div className={styles.orderSummaryItem}><strong>Promotion Applied:</strong> 0</div>
            <div className={styles.orderSummaryItem}><strong>Total Price:</strong> Rs.{orderTotal}</div>
          </div>
        </div>
      </div>

      <div className={styles.orderInfo}>
        <div className={styles.orderInfoDetails}>
          <img src={order.image} alt={order.productName} className={styles.orderImage} />
          <div className={styles.orderItemInfo}>
            <div><h1 className={styles.orderItemInfotitle}>{order.productName}</h1></div>
            <div><strong>Author:</strong> {order.author}</div>
            <div><strong>Price:</strong> Rs. {order.price}</div>
          </div>
        </div>
        <div className={styles.orderInfoDetailsEnd}>
          <><strong>Status:</strong> {order.status}</>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default OrderDetails;
