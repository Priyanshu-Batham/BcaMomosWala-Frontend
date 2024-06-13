import React from "react";
import "../../style/home.scss";
import "../../style/founder.scss";
import Founder from "./Founder";
import Menu from "./Menu";

const Home = () => {
  return (
    <>
      <section className="home">
        <div>
          <h1>BCA Momos Wala</h1>
          <p>Give Yourself some tasty Momos</p>

          <a href="#menu">Explore Menu</a>
        </div>
      </section>

      <Founder />

      <Menu />
    </>
  );
};

export default Home;
