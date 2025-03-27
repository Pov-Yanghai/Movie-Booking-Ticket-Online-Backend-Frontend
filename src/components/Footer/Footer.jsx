import React from 'react';
import './Footer.css'; // Import the CSS file
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok, FaTelegram } from 'react-icons/fa'; // Social Media Icons
import { AiFillApple, AiFillAndroid } from 'react-icons/ai'; // App Store and Google Play Icons
import { SiVisa, SiMastercard } from 'react-icons/si'; // Payment Icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section company">
        <h3>Company</h3>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Cinemas</a></li>
        </ul>
      </div>

      <div className="footer-section more">
        <h3>More</h3>
        <ul>
          <li><a href="#">Promotions</a></li>
          <li><a href="#">News & Activity</a></li>
          <li><a href="#">My Ticket</a></li>
          <li><a href="#">Terms & Conditions</a></li>
          <li><a href="#">Privacy & Policy</a></li>
        </ul>
      </div>

      <div className="footer-section download">
        <h3>Download Our App</h3>
        <div className="app-icons">
          <a href="#"><AiFillApple size={40} color="#FFF" /></a> {/* Apple icon */}
          <a href="#"><AiFillAndroid size={40} color="#3ddc84" /></a> {/* Android icon */}
        </div>
      </div>

      <div className="footer-section social">
        <h3>Follow Our Social Media</h3>
        <div className="social-icons">
          <a href="#"><FaFacebook size={30} color="#3b5998" /></a> {/* Facebook icon */}
          <a href="#"><FaInstagram size={30} color="#e1306c" /></a> {/* Instagram icon */}
          <a href="#"><FaYoutube size={30} color="#ff0000" /></a> {/* YouTube icon */}
          <a href="#"><FaTiktok size={30} color="#000" /></a> {/* TikTok icon */}
          <a href="#"><FaTelegram size={30} color="#0088cc" /></a> {/* Telegram icon */}
        </div>
      </div>

      <div className="footer-section payment">
        <h3>Payment</h3>
        <div className="payment-icons">
          <a href="#"><SiVisa size={40} color="#001f99" /></a> {/* Visa icon */}
          <a href="#"><SiMastercard size={40} color="#eb001b" /></a> {/* MasterCard icon */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
