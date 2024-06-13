import React from "react";

const MenuCard = ({ itemNum, momosImg, price, title, addToCart }) => {
  return (
    <div className="menuCard">
      <div>Item {itemNum}</div>
      <main>
        <img src={momosImg} alt={itemNum} />
        <h5>Price: ₹ {price}</h5>
        <p>{title}</p>
        <button
          onClick={() => {
            addToCart(itemNum);
          }}
        >
          Buy Now
        </button>
      </main>
    </div>
  );
};

export default MenuCard;
