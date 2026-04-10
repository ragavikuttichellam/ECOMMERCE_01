import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import api from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [address, setAddress] = useState("");

  const total = cart.reduce((a, b) => a + b.price * b.qty, 0);

  const placeOrder = async () => {
    const token = localStorage.getItem("token");

    try {
      await api.post("/orders",
        { products: cart, totalAmount: total, address },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      clearCart();
      alert("Order Placed Successfully!");
      navigate("/orders");
    } catch (err) {
      alert("Order Failed");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-10">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="md:col-span-2 bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Delivery Address</h2>

          <textarea
            className="border p-3 w-full rounded"
            rows="4"
            placeholder="Enter full address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div className="bg-white rounded-xl shadow p-6 h-fit">
          <h2 className="text-xl font-semibold">Order Summary</h2>

          <div className="flex justify-between mt-4">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <button
            onClick={placeOrder}
            className="bg-green-600 text-white w-full py-3 rounded-lg mt-6"
          >
            Place Order
          </button>
        </div>

      </div>
    </div>
  );
}
