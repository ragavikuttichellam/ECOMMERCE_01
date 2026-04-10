import { useEffect, useState } from "react";
import axios from "axios";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/orders")
      .then(res => setOrders(res.data));
  }, []);

  return (
    <div>
      <h2>All Orders</h2>
      {orders && orders.map((o)=> (
        <div key={o._id}>
          <p>User: {o.user?.email}</p>
          <p>Total: ₹{o.total}</p>
        </div>
      ))}
    </div>
  );
}
