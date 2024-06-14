import React from "react";
import "../../style/profile.scss";
import Pfp from "../../assets/founder.jpg";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";

const Profile = () => {
  return (
    <section className="profile">
      <main>
        <img src={Pfp} alt="user" />
        <h1>Priyanshu</h1>
        <div>
          <Link to="/admin/dashboard">
            Dashboard <MdDashboard />
          </Link>
        </div>
        <div>
          <Link to="/myorders">
            Orders <FaShoppingBag />
          </Link>
        </div>
        <button>
          Logout <IoIosLogOut />
        </button>
      </main>
    </section>
  );
};

export default Profile;
