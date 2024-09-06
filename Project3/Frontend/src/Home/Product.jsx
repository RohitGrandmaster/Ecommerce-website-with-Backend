import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button'; // Assuming you're using React Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { productFetchApi } from '../index';

function Product({ cartItems, setCartItems }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productFetchApi(setProducts);
  }, []);

  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
    alert('Product added to cart successfully!');
  };

  return (
    <div className="flex flex-wrap justify-around">
      <h1 className="w-full text-center mt- mb-3 text-3xl font-extrabold text-green-500">
        Mobiles
      </h1>
      {products.map((product) => (
        <div key={product.id} className="w-1/4 p-4">
          <a href={product.url}>
            <img
              src={product.image}
              alt={product.name}
              className="w-70 h-60 border border-black"
            />
          </a>
          <h2 className="text-lg">{product.name}</h2>
          <p className="text-gray-600">Price: {product.price}</p>
          <Button
            className="bg-blue-600"
            variant="primary"
            onClick={() => addToCart(product)}
            style={{ marginRight: '10px' }}
          >
            Add to Cart
          </Button>
          <Button className="bg-green-600" variant="success">
            Buy Now
          </Button>
        </div>
      ))}
    </div>
  );
}

export default Product;
