import React from "react";
import "../../style/dashboard.scss";
import { Link } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import { Chart } from "chart.js";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <main>
        <article>
          <div>
            <h3>{234}</h3>
            <p>Orders</p>
          </div>
          <div>
            <h3>₹{5632}</h3>
            <p>Income</p>
          </div>
          <div>
            <h3>{234}</h3>
            <p>Users</p>
          </div>
        </article>
        <section>
          <div>
            <Link to="/admin/orders">View Orders</Link>
            <Link to="/admin/users">View Users</Link>
          </div>

          <aside></aside>
        </section>
      </main>
    </section>
  );
};

export default Dashboard;
