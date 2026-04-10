import React, { useEffect, useState } from "react";
import api from "../api/api";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await api.get("/orders");
        setOrders(res.data);
      } catch (err) {
        console.log("ORDER ERROR", err.response?.data || err.message);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h2>My Orders</h2>

      {orders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        orders.map((o) => (
          <div key={o._id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
            <h4>Status: {o.status}</h4>
            <p>Total: ₹{o.total}</p>
          </div>
        ))
      )}
    </div>
  );
}
