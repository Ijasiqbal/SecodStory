import React, { useState } from 'react';
import './style.css/ProductCard.css';

function ProductCard() {
  // Sample product data
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "It Ends With Us",
      author: "Colleen Hoover",
      price: 256,
      image: "https://m.media-amazon.com/images/I/813aV273-rL._SL1500_.jpg",
      tag: "Seller" // Sample tag type,
    },
    {
      id: 2,
      name: "It Ends With Us",
      author: "Colleen Hoover",
      price: "180",
      image: "https://m.media-amazon.com/images/I/51bStGhF7WL._SY445_SX342_.jpg",
      tag: "Seller" // Sample tag type
  },
  {
      id: 3,
      name: "It Ends With Us",
      author: "Colleen Hoover",
      price: "170",
      image: "https://m.media-amazon.com/images/I/51kkeE8Jv+L._SY445_SX342_.jpg",
      tag: "Lender" // Sample tag type
  },
  {
      id: 4,
      name: "It Ends With Us",
      author: "Colleen Hoover",
      price: "111",
      image: "https://m.media-amazon.com/images/I/81yjqhNlGEL._SL1500_.jpg",
      tag: "Lender" // Sample tag type
  },
  {
      id: 5,
      name: "It Ends With Us",
      author: "Colleen Hoover",
      price: "222",
      image: "https://m.media-amazon.com/images/I/41LU+AaRIQL._SY445_SX342_.jpg",
      tag: "Seller" // Sample tag type
  },
  {
      id: 6,
      name: "It Ends With Us",
      author: "Colleen Hoover",
      price: "201",
      image: "https://m.media-amazon.com/images/I/51nZpJeLf4L._SY445_SX342_.jpg",
      tag: "Seller" // Sample tag type
  },
  {
      id: 7,
      name: "It Ends With Us",
      author: "Colleen Hoover",
      price: "200",
      image: "https://m.media-amazon.com/images/I/61V813zEOzL._SY445_SX342_.jpg",
      tag: "Seller" // Sample tag type
  },
  {
      id: 8,
      name: "It Ends With Us",
      author: "Colleen Hoover",
      price: "199",
      image: "https://m.media-amazon.com/images/I/51JtK7GW3RL._SY445_SX342_.jpg",
      tag: "Seller" // Sample tag type
  },
  {
      id: 9,
      name: "It Ends With Us",
      author: "Colleen Hoover",
      price: "129",
      image: "https://m.media-amazon.com/images/I/51gAQo24viL._SY445_SX342_.jpg",
      tag: "Lender" // Sample tag type
  },
  {
      id: 10,
      name: "It Ends With Us",
      author: "Colleen Hoover",
      price: "99",
      image: "https://m.media-amazon.com/images/I/51IQsrtSbVL._SY445_SX342_.jpg",
      tag: "Seller" // Sample tag type
  },
  {
      id: 11,
      name: "It Ends With Us",
      author: "Colleen Hoover",
      price: "160",
      image: "https://m.media-amazon.com/images/I/71EncrgfbZL._SY425_.jpg",
      tag: "Lender" // Sample tag type
  },
  {
      id: 12,
      name: "It Ends With Us",
      author: "Colleen Hoover",
      price: "159",
      image: "https://m.media-amazon.com/images/I/51EIc57chuL._SX342_SY445_.jpg",
      tag: "Seller" // Sample tag type
  },
  {
      id: 13,
      name: "It Ends With Us",
      author: "Colleen Hoover",
      price: "109",
      image: "https://m.media-amazon.com/images/I/51wmswmIrRL._SX342_SY445_.jpg",
      tag: "Seller" // Sample tag type
  },
  {
      id: 14,
      name: "It Ends With Us",
      author: "Colleen Hoover",
      price: "199",
      image: "https://m.media-amazon.com/images/I/813aV273-rL._SL1500_.jpg",
      tag: "Seller" // Sample tag type
  },
    // Add more product objects here
  ]);

  // State variable to manage filtering
  const [filterOption, setFilterOption] = useState('priceLowToHigh');

  // Function to handle filtering
  const handleFilterChange = (event) => {
    setFilterOption(event.target.value);
    // Call function to re-sort products based on the new filter option
    sortProducts(event.target.value);
  };

  // Function to sort products based on the current filter option
  const sortProducts = (filterOption) => {
    const sortedProducts = [...products].sort((a, b) => {
      if (filterOption === 'priceLowToHigh') {
        return a.price - b.price;
      } else if (filterOption === 'priceHighToLow') {
        return b.price - a.price;
      }
    });
    setProducts(sortedProducts);
  };

  return (
    <>
    <div className="filter-options">
        <label htmlFor="filter">Filter:</label>
        <select id="filter" value={filterOption} onChange={handleFilterChange}>
          <option value="priceLowToHigh">Price Low to High</option>
          <option value="priceHighToLow">Price High to Low</option>
          {/* Add more filtering options here */}
        </select>
      </div>
    <div className='Product-list-card'>
      {products.map(product => (
        <div className="product" key={product.id}>
          <div className="product-image">
            <img src={product.image} alt="Book Cover" />
            <span className="seller-tag inside" style={{backgroundColor: product.tag === 'Seller' ? '#EC9A78' : '#8878EC'}}>{product.tag}</span>
          </div>
          <div>
            <h2 className="book-name">{product.name}</h2>
            <div className="author-price">
              <p className="author-name">{product.author}</p>
              <p className="price">RS:{product.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
    
  );
}

export default ProductCard;
