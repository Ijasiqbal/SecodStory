import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import f1 from "../assets/f1.jpg";
import f2 from "../assets/f2.jpg";
import f3 from "../assets/f3.jpg";
import Navbar from "../components/Navbar";     
import Footer from '../components/Footer';        
import AddressBox from "../components/AddressBox";     
import styles from "./styles.css/Cart.module.css"; // Import styles as a module
import axios from '../api/axiosInstance'; // Import Axios instance

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {  
    // Fetch cart items from the backend 
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('/cart');
        setCartItems(response.data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };
    
    fetchCartItems(); 
    
  }, []);

  // eslint-disable-next-line react/prop-types
  const PriceDisplay = ({ originalPrice, discountedPrice }) => {
    return (
      <div className={styles["price-display"]}>
        <span className={styles["original-price"]}>Rs.{originalPrice}</span>
        <span className={styles["discounted-price"]}>Rs.{discountedPrice}/-</span>
      </div> 
    );
  };

  const handleRemoveItem = async (itemId) => {
    try {
      await axios.delete(`/cart/${itemId}`);
      const updatedCart = cartItems.filter((item) => item.id !== itemId);
      setCartItems(updatedCart);
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };  

  const deliveryCharge = 50;
  const subtotal = cartItems.reduce(
    (total, item) => total + item.discountedPrice * item.quantity,
    0
  );
  const totalPrice = subtotal + deliveryCharge;  

  return (
    <>
      <Navbar />
      <AddressBox />
      <div className={styles["cart-container"]}>
        <h1>Shopping Cart</h1>
        <hr />
        <div className={styles["cart-container1"]}>
          <div className={styles["cart-items-container"]}>
            {cartItems.map((item) => (
              <div key={item.id}>
                <div className={styles["cart-item"]}>
                  <img src={item.image} alt="img" />
                  <div className={styles["item-details"]}>
                    <h2>{item.name}</h2>
                    <p>{item.category}</p>
                    <p>{item.author}</p>
                    <h3>
                      Price:{" "}
                      <PriceDisplay
                        originalPrice={item.originalPrice}
                        discountedPrice={item.discountedPrice}
                      />{" "} 
                    </h3>
                  </div>
                  <button
                    className={styles["icon-button"]}
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />  
                  </button>
                </div>
                <hr />
              </div>
            ))}
          </div>
          <div className={styles["order-summary"]}>
            <div className={styles["summary-details"]}>  
              <h4>Order Summary</h4>  
              <hr />  
              <p>Subtotal: Rs. {subtotal}/-</p>
              <p>Delivery Charges: Rs. {deliveryCharge}/-</p>
              <div style={{ display: "flex", alignItems: "center" }}>
                <p style={{ flex: 1, height: 15 }}>Coupon Discount:{" "}</p>
                <input type="text" style={{ flex: 0.33, width: 140, height: 25, backgroundColor: "lightgray", borderRadius: 15 }} />
              </div>
              <p>Total Price: Rs. {totalPrice}/-</p>
              <button className={styles.ButtonA} type="submit" name="Button">
                Proceed
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />  
    </>
  );
};

export default CartPage; 
