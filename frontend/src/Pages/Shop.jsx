import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { CartContext } from "../Context/CartContext";
import "./Shop.css";
import { Navigate } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/products");
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="shop-container">
      <h2 className="shop-title"> Latest Collection</h2>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product._id}>
            
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />

            <h3>{product.name}</h3>

            <p className="product-price">₹ {product.price}</p>

            <button
              className="cart-btn"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;