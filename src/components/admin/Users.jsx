import React from "react";
import Pfp from '../../assets/founder.jpg';

const Users = () => {
  const arr = [1, 2, 3, 4];

  return (
    <div className="tables">
      <main>
        <h1>Users</h1>
        <table>
          <thead>
            <tr>
              <th>User Id</th>
              <th>Name</th>
              <th>Photo</th>
              <th>Role</th>
              <th>Since</th>
            </tr>
          </thead>

          <tbody>
            {arr.map((i) => (
              <tr key={i}>
                <td>#bzsr</td>
                <td>Priyanshu</td>
                <td>
                  <img src={Pfp} alt="user"/>
                </td>
                <td>Admin</td>
                <td>01-03-2025</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Users;
