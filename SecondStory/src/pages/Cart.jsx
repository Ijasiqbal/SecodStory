import './styles.css/Cart.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'; 
import f1 from '../assets/f1.jpg';
import f2 from '../assets/f2.jpg'; 
import f3 from '../assets/f3.jpg'; 
import Navbar from '../components/Navbar'
import AddressBox from './AddressBox'; 

const CartPage = () => {
  const [cartItems, setCartItems] = useState([ 
    { id: 1, image: f1, name: 'Table For Two', category: 'Category : Fiction', author: 'Author   : Kate Gavin', originalPrice: 450, discountedPrice: 300, quantity: 1},
    { id: 2, image: f2, name: 'Percival Everett', category: 'Category : Fiction', author: 'Author   : James', originalPrice: 400, discountedPrice: 250, quantity: 1},
    { id: 3, image: f3, name: 'The Hunter', category: 'Category : Novel', author: 'Author   : Tana French', originalPrice: 500, discountedPrice: 300, quantity: 1},
  ]);

  const PriceDisplay = ({ originalPrice, discountedPrice }) => {
    return(
      <div className="price-display">  
        <span className="original-price">Rs.{originalPrice}</span>
        <span className="discounted-price">Rs.{discountedPrice}/-</span>    
      </div>  
    );
  };

  const handleRemoveItem = (itemId) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCart); 
 };

  const deliveryCharge = 50;
  const subtotal = cartItems.reduce((total, item) => total + (item.discountedPrice * item.quantity), 0);  
  const totalPrice = subtotal + deliveryCharge;

  return (
    <>
    <Navbar />
    <AddressBox /> 
        <div className='cart-container'>  
      <h1>Shopping Cart</h1> <hr></hr> 
      <div className='cart-container1'>
      <div className='cart-items-container'> 
        {cartItems.map(item => ( 
          <div key={item.id} className='cart-item'>  
            <img src={item.image} alt="img" /> 
            <div className='item-details'>  
              <h2>{item.name}</h2>
              <p>{item.category}</p> 
              <p>{item.author}</p>
              <h3> Price: <PriceDisplay originalPrice={item.originalPrice} discountedPrice={item.discountedPrice} />  </h3>
            </div> 
            <button className="icon-button" onClick={() => handleRemoveItem(item.id)}>
                <FontAwesomeIcon icon={faTrash} />
            </button> 
             <hr></hr>
          </div> 
        ))} 
      </div>
      <div className='order-summary'> 
        <div className='summary-details'>  
          <h4>Order Summary</h4>
          <hr />
          <p>Subtotal: Rs. {subtotal}/-</p>
          <p>Delivery Charges: Rs. {deliveryCharge}/-</p> 
          <p>Coupon Discount: <input type='text'></input></p>
          <p>Total Price: Rs. {totalPrice}/-</p>
          <button className="ButtonA" type="submit" name="Button">Proceed</button>  
        </div> 
      </div> 
    </div> 
    </div>
    </>
  );
};

export default CartPage;  
