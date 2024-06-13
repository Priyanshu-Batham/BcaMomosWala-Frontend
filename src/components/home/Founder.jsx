import React from "react";
import founderPfp from "../../assets/founder.jpg";

const Founder = () => {
  return (
    <section className="founder">
      <div>
        <img src={founderPfp} alt="founder" height={200} width={200} />
        <h3>Priyanshu Batham</h3>
        <p>
          Hey Everyone! I am <strong>Priyanshu</strong>, the founder of{" "}
          <strong>BCA Momos Wala</strong>.<br />
          Our aim is to create world's best <strong>Momos</strong>.
        </p>
      </div>
    </section>
  );
};

export default Founder;
