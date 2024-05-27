import React, { useState } from 'react'; 
import Navbar from '../components/Navbar';
import w1 from '../assets/w1.jpg';
import w2 from '../assets/w2.jpg';
import w3 from '../assets/w3.jpg';
import w4 from '../assets/w4.jpg';
import w5 from '../assets/w5.jpg';
import w6 from '../assets/w6.jpg';
import w7 from '../assets/w7.jpg';
import w8 from '../assets/w8.jpg';
import w9 from '../assets/w9.jpg';
import './styles.css/Wishlist.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


const initialWishlist = [
  { id: 1, name: 'Angles', price: 'Rs. 200', image: w1},
  { id: 2, name: 'Acid Row', price: 'Rs. 280', image: w2 },
  { id: 3, name: 'Bag of Bones', price: 'Rs. 300', image: w3 }, 
  { id: 4, name: 'One of us know', price: 'Rs. 400', image: w4 },
  { id: 5, name: 'A short walk', price: 'Rs. 360', image: w5},
  { id: 6, name: 'Ghost Station', price: 'Rs. 400', image: w6},
  { id: 7, name: 'A sweet sting of salt', price: 'Rs. 270', image: w7},
  { id: 8, name: 'Education in malice', price: 'Rs. 450', image: w8},
  { id: 9, name: 'Dangerous game', price: 'Rs. 290', image: w9},
]; 

function Wishlist() {
  const [wishlist, setWishlist] = useState(initialWishlist); 
  const [cart, setCart] = useState([]); 

  const handleRemoveFromWishlist = (product) => {
    setWishlist(wishlist.filter(item => item.id !== product.id));
  };

  const handleAddToCart = (product) => {
    if (!cart.find(item => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  return (
    <>
    <Navbar/>
    <div className="Wishlist-container"> 
      <h2>My Wishlist</h2> 
      <div className="wishlist">
        {wishlist.length === 0 ? (
          <p>Your wishlist is empty</p> 
        ) : (
          wishlist.map((product) => ( 
            <div key={product.id} className="product-card"> 
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p> 
              <h3>{product.price}</h3>
              <button onClick={() => handleRemoveFromWishlist(product)}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
              <button onClick={() => handleAddToCart(product)}>
                Add to Cart  
              </button>
            </div> 
          ))
        )}
      </div>
    </div> 
    </>
  );
}

export default Wishlist;
