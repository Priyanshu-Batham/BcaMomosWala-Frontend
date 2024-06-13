import React from "react";
import "../../style/cart.scss";
import CartItem from "./CartItem";
import Momos1 from "../../assets/momos1.png";
import Momos2 from "../../assets/momos2.png";
import Momos3 from "../../assets/momos3.png";
import { Link } from "react-router-dom";

const Cart = () => {
    const increment = (item) => {}
    const decrement = (item) => {}

  return (
    <section className="cart">
      <main>
        <CartItem
          value={5}
          title="Spicy Fried Momos"
          img={Momos1}
          increment={()=>increment(1)}
          decrement={()=>decrement(1)}
        />
        <CartItem
          value={5}
          title="Plain Steamed Momos"
          img={Momos2}
          increment={()=>increment(2)}
          decrement={()=>decrement(2)}
        />
        <CartItem
          value={5}
          title="Special Dragon Momos"
          img={Momos3}
          increment={()=>increment(3)}
          decrement={()=>decrement(3)}
        />

        <article>
            <div>
                <h4>Sub Total</h4>
                <p>₹{2000}</p>
            </div>
            <div>
                <h4>Tax</h4>
                <p>₹{200 * 1.18}</p>
            </div>
            <div>
                <h4>Shipping Charges</h4>
                <p>₹{2000}</p>
            </div>
            <div>
                <h4>Total</h4>
                <p>₹{2000}</p>
            </div>
            <Link to='/shipping'>Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
