import React from 'react';

import './Footer.css';

function Footer() {
  return (
    <div className="footerParentDiv">
      <div className="content">
        <div>
          <div className="heading">
            <p>POPULAR Deals</p>
          </div>
          <div className="list">
            <ul>
              <li>Crafts</li>
              <li>Foods</li>
              <li>Paintings</li>
              <li>Art</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>ABOUT US</p>
          </div>
          <div className="list">
            <ul>
              <li>About MyoPro Group</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>MyoPro People</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>MyoPro</p>
          </div>
          <div className="list">
            <ul>
              <li>Help</li>
              <li>Sitemap</li>
              <li>Legal & Privacy information</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>Other Countries Pakistan - india - Indonesia</p>
        <p>Free Classifieds in India. © 2021-2023 MyoPro </p>
      </div>
    </div>
  );
}

export default Footer;
