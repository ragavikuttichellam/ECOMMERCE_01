import React from "react";
import "./admin.css";

export default function Dashboard() {
  return (
    <div>
      <h1>Admin Dashboard</h1>

      <div className="cards">
        <div className="card">Total Products: 120</div>
        <div className="card">Orders: 56</div>
        <div className="card">Users: 230</div>
        <div className="card">Revenue: ₹58,000</div>
      </div>
    </div>
  );
}
