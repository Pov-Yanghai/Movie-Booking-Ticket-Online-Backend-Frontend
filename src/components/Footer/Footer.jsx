import React from 'react';
import './Footer.css'; // Import the CSS file

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
          <a href="#"><img src="./images/appst.jpg" alt="Google Play" /></a>
          <a href="#"><img src="./images/playst.png" alt="App Store" /></a>
        </div>
      </div>

      <div className="footer-section social">
        <h3>Follow Our Social Media</h3>
        <div className="social-icons">
          <a href="#"><img src="./images/facebook-3d-vector-logo_1072236-11.avif" alt="Facebook" /></a>
          <a href="#"><img src="./images/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3JtNTMzLW5lb24-MDAzLmpwZw.webp" alt="Instagram" /></a>
          <a href="#"><img src="./images/youtube-logo-youtube-icon-youtube-symbol-free-free-vector.jpg" alt="YouTube" /></a>
          <a href="#"><img src="./images/tiktok.png" alt="TikTok" /></a>
          <a href="#"><img src="./images/telegram.png" alt="Telegram" /></a>
        </div>
      </div>

      <div className="footer-section payment">
        <h3>Payment</h3>
        <div className="payment-icons">
          <img src="./images/ABA.png" alt="ABA" />
          <img src="./images/payment_pay_way.png" alt="Payway" />
          <img src="./images/visa-icon-2048x628-6yzgq2vq.png" alt="Visa" />
          <img src="./images/mastercard1.png" alt="MasterCard" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;