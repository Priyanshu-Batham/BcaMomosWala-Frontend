import React from "react";
import "../../style/orderDetails.scss";

const OrderDetails = () => {
  return (
    <section className="orderDetails">
      <main>
        <h1>Order Details</h1>
        <div>
          <h1>Shipping</h1>
          <p>
            <b>Address</b>
            {"ilegnverg"}
          </p>
        </div>
        <div>
          <h1>Contact</h1>
          <p>
            <b>Name</b>
            {"Priyanshu"}
          </p>
          <p>
            <b>Ph No</b>
            {2913847224}
          </p>
        </div>
        <div>
          <h1>Status</h1>
          <p>
            <b>Order Status</b>
            {"Processing"}
          </p>
          <p>
            <b>Placed At</b>
            {"12-03-2024"}
          </p>
          <p>
            <b>Delivered At</b>
            {"12-03-2034"}
          </p>
        </div>
        <div>
          <h1>Payment</h1>
          <p>
            <b>Payment Method</b>
            {"Online"}
          </p>
          <p>
            <b>Payment Reference</b>
            {"#12032024"}
          </p>
          <p>
            <b>Paid At</b>
            {"12-03-2034"}
          </p>
        </div>
        <div>
          <h1>Amount</h1>
          <p>
            <b>Items Total</b>₹{2345}
          </p>
          <p>
            <b>Shipping Charges</b>₹{235}
          </p>
          <p>
            <b>Tax</b>₹{34}
          </p>
          <p>
            <b>Total Amount</b>₹{34 + 23 + 342 + 426}
          </p>
        </div>

        <article>
          <h1>Ordered Items</h1>
          <div>
            <h4>Plain Steamed Momos</h4>
            <div>
              <span>{12}</span> x <span>{422}</span>
            </div>
          </div>
          <div>
            <h4>Spicy Fried Momos</h4>
            <div>
              <span>{1}</span> x <span>{552}</span>
            </div>
          </div>
          <div>
            <h4>Special Dragon Momos</h4>
            <div>
              <span>{4}</span> x <span>{358}</span>
            </div>
          </div>
          <div>
            <h4 style={{ fontWeight: 800 }}>Sub Total</h4>
            <div style={{ fontWeight: 800 }}>₹{3234}</div>
          </div>
        </article>
      </main>
    </section>
  );
};

export default OrderDetails;
