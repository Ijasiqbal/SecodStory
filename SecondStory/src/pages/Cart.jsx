import './styles.css/Cart.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'; 
import f1 from '../assets/f1.jpg';
import f2 from '../assets/f2.jpg'; 
import f3 from '../assets/f3.jpg'; 

const CartPage = () => {
  const [cartItems, setCartItems] = useState([ 
    { id: 1, image: f1, name: 'Table For Two', category: 'Category : Fiction', author: 'Author : Kate Gavin', price: 300, quantity: 1},
    { id: 2, image: f2, name: 'Percival Everett', category: 'Category : Fiction', author: 'Author : James', price: 250, quantity: 1},
    { id: 3, image: f3, name: 'The Hunter', category: 'Category : Novel', author: 'Author : Tana French', price: 300, quantity: 1},
  ]);

  const handleRemoveItem = (itemId) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCart); 
 };

  const deliveryCharge = 50;
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);  
  const totalPrice = subtotal + deliveryCharge;

  return (
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
              <h3>Price: Rs. {item.price}/-</h3>  
            </div> 
            <button onClick={() => handleRemoveItem(item.id)}><FontAwesomeIcon icon={faTrash} /></button> <hr></hr>
          </div> 
        ))} 
      </div>
      <div className='order-summary'> 
        <div className='summary-details'> 
          <h3>Order Summary</h3>
          <hr />
          <p>Subtotal: Rs. {subtotal}/-</p>
          <p>Delivery Charges: Rs. {deliveryCharge}/-</p> 
          <p>Coupon Discount: ________________</p>
          <p>Total Price: Rs. {totalPrice}/-</p>
          <button className="ButtonA" type="submit" name="Button">Proceed</button> 
        </div> 
      </div> 
    </div>
    </div>
  );
};

export default CartPage; 
