import React from "react";
import { motion } from "framer-motion";

const MenuCard = ({ itemNum, momosImg, price, title, addToCart, delay }) => {
  return (
    <motion.div
      initial={{
        x: "-100%",
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{delay: delay}}
      className="menuCard"
    >
      <div>Item {itemNum}</div>
      <main>
        <img src={momosImg} alt={itemNum} />
        <h5>Price: ₹{price}</h5>
        <p>{title}</p>
        <button
          onClick={() => {
            addToCart(itemNum);
          }}
        >
          Buy Now
        </button>
      </main>
    </motion.div>
  );
};

export default MenuCard;
