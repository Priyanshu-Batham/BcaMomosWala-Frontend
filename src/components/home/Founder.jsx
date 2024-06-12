import React from "react";
import { motion } from "framer-motion";
import founderPfp from '../../assets/founder.jpg'

const Founder = () => {
    const anime = {
        initial:{
            x: '-100%',
            opacity: 0,
        },

        whileInView:{
            x: 0,
            opacity: 1,
        }
    }

  return (
    <section className="founder">
      <motion.div {...anime}>
        <img src={founderPfp} alt='founder' height={200} width={200}/>
        <h3>Priyanshu Batham</h3>
        <p>Hey Everyone! I am Priyanshu, the founder of BCA Momos Wala.<br />
        Our aim is to create world's best Momos.
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
