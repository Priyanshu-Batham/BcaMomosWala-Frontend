import React from "react";
import "../../style/home.scss";
import "../../style/founder.scss";
import { motion } from "framer-motion";
import Founder from "./Founder";
import Menu from './Menu'

const Home = () => {
  return (
    <>
      <section className="home">
        <div>
          <motion.h1
            initial={{ x: "-100%", opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
          >
            BCA Momos Wala
          </motion.h1>
          <motion.p
            initial={{ x: "-100%", opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{ delay: 0.2 }}
          >
            Give Yourself some tasty Momos
          </motion.p>

          <motion.a
            href="#menu"
            initial={{ y: "-100%", opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{ delay: 0.5 }}
          >
            Explore Menu
          </motion.a>
        </div>
      </section>

      <Founder />

      <Menu />
    </>
  );
};

export default Home;
