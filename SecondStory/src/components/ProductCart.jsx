import React from 'react';
import './style.css/ProductCart.css';

function ProductCart() {
  // Sample product data
  const products = [
    {
      id: 1,
      name: "It Ends With Us",
      author: "Colleen Hoover",
      price: "$10.99",
      image: "https://m.media-amazon.com/images/I/813aV273-rL._SL1500_.jpg",
      tag: "Seller" // Sample tag type
    },
    {
      id: 1,
      name: "It Ends With Us",
      author: "Colleen Hoover",
      price: "$10.99",
      image: "https://m.media-amazon.com/images/I/813aV273-rL._SL1500_.jpg",
      tag: "Seller" // Sample tag type
    },
    {
      id: 1,
      name: "It Ends With Us",
      author: "Colleen Hoover",
      price: "$10.99",
      image: "https://m.media-amazon.com/images/I/813aV273-rL._SL1500_.jpg",
      tag: "Seller" // Sample tag type
    },
    {
      id: 1,
      name: "It Ends With Us",
      author: "Colleen Hoover",
      price: "$10.99",
      image: "https://m.media-amazon.com/images/I/813aV273-rL._SL1500_.jpg",
      tag: "Seller" // Sample tag type
    },
    {
      id: 1,
      name: "It Ends With Us",
      author: "Colleen Hoover",
      price: "$10.99",
      image: "https://m.media-amazon.com/images/I/813aV273-rL._SL1500_.jpg",
      tag: "Seller" // Sample tag type
    },
    {
      id: 1,
      name: "It Ends With Us",
      author: "Colleen Hoover",
      price: "$10.99",
      image: "https://m.media-amazon.com/images/I/813aV273-rL._SL1500_.jpg",
      tag: "Seller" // Sample tag type
    },
    {
      id: 2,
      name: "Book Name 2",
      author: "Author Name 2",
      price: "$12.99",
      image: "url_to_your_image",
      tag: "Lender" // Sample tag type
    },
  ];

  return (
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
              <p className="price">{product.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCart;
