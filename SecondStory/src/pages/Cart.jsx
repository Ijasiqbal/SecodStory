import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import f1 from "../assets/f1.jpg";
import f2 from "../assets/f2.jpg";
import f3 from "../assets/f3.jpg";
import Navbar from "../components/Navbar";
import AddressBox from "./AddressBox";
import styles from "./styles.css/Cart.module.css"; // Import styles as a module

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: f1,
      name: "Table For Two",
      category: "Category : Fiction",
      author: "Author   : Kate Gavin",
      originalPrice: 450,
      discountedPrice: 300,
      quantity: 1,
    },
    {
      id: 2,
      image: f2,
      name: "Percival Everett",
      category: "Category : Fiction",
      author: "Author   : James",
      originalPrice: 400,
      discountedPrice: 250,
      quantity: 1,
    },
    {
      id: 3,
      image: f3,
      name: "The Hunter",
      category: "Category : Novel",
      author: "Author   : Tana French",
      originalPrice: 500,
      discountedPrice: 300,
      quantity: 1,
    },
  ]);

  // eslint-disable-next-line react/prop-types
  const PriceDisplay = ({ originalPrice, discountedPrice }) => {
    return (
      <div className={styles["price-display"]}>
        <span className={styles["original-price"]}>Rs.{originalPrice}</span>
        <span className={styles["discounted-price"]}>
          Rs.{discountedPrice}/-
        </span>
      </div>
    );
  };

  const handleRemoveItem = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
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
        <h1>Shopping Cart</h1> <hr></hr>
        <div className={styles["cart-container1"]}>
          <div className={styles["cart-items-container"]}>
            {cartItems.map((item) => (
<<<<<<< HEAD
              <div key={item.id} className={styles["cart-item"]}>
=======
              <div>
                <div key={item.id} className={styles["cart-item"]}>
>>>>>>> f01a598c4f801957d1a77663e32732adc8a475f9
                <img src={item.image} alt="img" />
                <div className={styles["item-details"]}>
                  <h2>{item.name}</h2>
                  <p>{item.category}</p>
                  <p>{item.author}</p>
                  <h3>
                    {" "}
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
<<<<<<< HEAD
                <hr></hr>
              </div>
=======
                
              </div>
              <hr></hr>
              </div>
              
>>>>>>> f01a598c4f801957d1a77663e32732adc8a475f9
            ))}
          </div>
          <div className={styles["order-summary"]}>
            <div className={styles["summary-details"]}>
              <h4>Order Summary</h4>
              <hr />
              <p>Subtotal: Rs. {subtotal}/-</p>
              <p>Delivery Charges: Rs. {deliveryCharge}/-</p>
              <p>
                Coupon Discount:{" "}
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="text" style={{ flex: 1 }} />
                </div>
              </p>
              <p>Total Price: Rs. {totalPrice}/-</p>
              <button className={styles.ButtonA} type="submit" name="Button">
                Proceed
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
