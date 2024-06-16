import React from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { CiSettings } from "react-icons/ci";

const Orders = () => {
    const arr = [1, 2, 3, 4, 5];
  
    return (
      <div className="tables">
        <main>
          <h1>Orders</h1>
          <table>
            <thead>
              <tr>
                <th>Order Id</th>
                <th>Status</th>
                <th>Item Qty</th>
                <th>Amount</th>
                <th>Payment Method</th>
                <th>User</th>
                <th>Action</th>
              </tr>
            </thead>
  
            <tbody>
              {arr.map((i) => (
                <tr key={i}>
                  <td>#bzsr</td>
                  <td>Shipped</td>
                  <td>{69}</td>
                  <td>₹ {123}</td>
                  <td>Cod</td>
                  <td>Priyanshu</td>
                  <td>
                    <Link to={`/order/${"a;sldkfj"}`}>
                      <AiOutlineEye />
                    </Link>
                    <button>
                        <CiSettings />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    );
  };

export default Orders;