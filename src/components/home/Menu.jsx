import React from "react";
import "../../style/menu.scss";
import MenuCard from "./MenuCard";
import Momos1 from "../../assets/momos1.png";
import Momos2 from "../../assets/momos2.png";
import Momos3 from "../../assets/momos3.png";

const Menu = () => {
  function addToCart(itemNum) {}

  return (
    <section id="menu">
      <h1>Menu</h1>
      <div>
        <MenuCard
          itemNum={1}
          momosImg={Momos1}
          price={70}
          title={"Spicy Fried Momos"}
          addToCart={addToCart}
        />
        <MenuCard
          itemNum={2}
          momosImg={Momos2}
          price={100}
          title={"Plain Steamed Momos"}
          addToCart={addToCart}
        />
        <MenuCard
          itemNum={3}
          momosImg={Momos3}
          price={150}
          title={"Special Dragon Momos"}
          addToCart={addToCart}
        />
      </div>
    </section>
  );
};

export default Menu;
