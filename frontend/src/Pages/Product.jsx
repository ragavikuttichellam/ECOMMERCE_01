import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/api";
import { CartContext } from "../Context/CartContext";
import "./Product.css";

export default function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState([]);

  useEffect(() => {
    api.get(`/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err));
  }, [id]);

  if (!product) return <h2 style={{textAlign:"center"}}>Loading...</h2>;

  const whatsappOrder = () => {
    const msg = `Hello, I want to order:\n\n${product.name}\nPrice: ₹${product.price}`;
    window.open(`https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(msg)}`);
  };

  return (
    <div className="product-page">

      <div className="product-container">

        <div className="product-image">
          <img
            src={
              product.image ||
              "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
            }
            alt={product.name}
          />
        </div>

        <div className="product-info">
          <h1>{product.name}</h1>
          <h2>₹{product.price}</h2>

          <p className="desc">
            {product.description ||
              "Premium quality garment. Comfortable fabric. Best for daily wear."}
          </p>

          <div className="btn-row">
            <button onClick={() => addToCart(product)} className="cart-btn">
              Add to Cart
            </button>

            <button onClick={() => navigate("/checkout")} className="buy-btn">
              Buy Now
            </button>

            <button onClick={whatsappOrder} className="wa-btn">
              WhatsApp Order
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
