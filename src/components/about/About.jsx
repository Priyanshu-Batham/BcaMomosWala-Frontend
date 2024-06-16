import React from "react";
import "../../style/about.scss";
import { RiFindReplaceLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Pfp from "../../assets/founder.jpg";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>
        <article>
          <h4>Bca Momos Wala</h4>
          <p>
            We are Bca Momos Wala Team. The People whose goal is to provide you
            with the tastiest Momos on this planet.
          </p>
          <p>
            Explore the various types of Momos. Click below to see the Menu.
          </p>
          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>
        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={Pfp} alt="founder" />
              <h3>Priyanshu Batham</h3>
            </div>
            <p>I am Priyanshu Batham, The founder of Bca Momos Wala.</p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
