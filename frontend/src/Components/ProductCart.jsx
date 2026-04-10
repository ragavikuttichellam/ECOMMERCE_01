
import "./ProductCart.css";
import { useContext } from "react";
import { CartContext } from "./Context/CartContext";
import { useNavigate } from "react-router-dom";

export default function ProductCart({ product }) {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>
      <p className="price">₹{product.price}</p>

      <div className="btn-group">
        <button onClick={() => navigate(`/product/${product._id}`)}>
          View
        </button>

        <button onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
