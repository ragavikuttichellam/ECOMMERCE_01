import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import "./Navbar.css";

export default function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <header className="navbar">
      <h1 className="logo">GarmentX</h1>

      <div className="search">
        <input placeholder="Search for shirts, jeans, t-shirts..." />
        <button>🔍</button>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>     {/* FIX */}
        <Link to="/shop">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/login">Login</Link>
        <Link to="/cart">
          🛒 <span className="cart-badge">{cart.length}</span>
        </Link>
      </div>
    </header>
  );
}

