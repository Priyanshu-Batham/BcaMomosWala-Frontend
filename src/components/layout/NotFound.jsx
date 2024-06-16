import React from "react";
import "../../style/notFound.scss";
import { MdError } from "react-icons/md";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="notFound">
      <main>
        <div>
          <MdError />
          <h1>404</h1>
        </div>
        <p>Page Not Found. Click Below to goto Home Page.</p>
        <Link to='/' >Go To Home</Link>
      </main>
    </section>
  );
};

export default NotFound;
