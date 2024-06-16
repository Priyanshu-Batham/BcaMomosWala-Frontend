import React from "react";
import "../../style/dashboard.scss";
import { Link } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import { Chart, Tooltip, ArcElement, Legend } from "chart.js";

const Dashboard = () => {
  Chart.register(Tooltip, ArcElement, Legend);
  const data = {
    labels: ["Preparing", "Shipped", "Delivered"],
    datasets: [
      {
        label: "No of orders",
        data: [2, 3, 4,],
        backgroundColor: [
          "rgba(159, 63, 176, 0.1)",
          "rgba(78, 63, 176, 0.1)",
          "rgba(156, 0, 60, 0.1)",
        ],
        borderColor: [
          "rgb(159, 63, 176)",
          "rgb(78, 63, 176)",
          "rgb(156, 0, 60)",
        ],
        borderWidth: 1,
      },
    ],
  };
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

          <aside>
            <Doughnut data={data} />
          </aside>
        </section>
      </main>
    </section>
  );
};

export default Dashboard;
