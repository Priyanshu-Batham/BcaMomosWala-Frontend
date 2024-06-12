import React from "react";
import '../../style/footer.scss'
import {AiFillInstagram, AiFillGithub, AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>BCA Momos Wala</h2>
        <p>We work hard to offer you the best taste possible</p>
        <br/>
        <em>We give attention to genuine feedbacks</em>
        <br/>
        <br/>
        <strong>All Rights Reserved @BCAMomosWala</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>
        <a href="#"><AiFillInstagram /></a>
        <a href="#"><AiFillGithub /></a>
        <a href="#"><AiFillLinkedin /></a>
      </aside>
    </footer>
  );
};

export default Footer;
