import React from 'react';
import "./style.css";

const Footer = () => (
  <footer className="footer">
    Kursy walut według średniego kursu NBP z dnia 3.11.2022
    <ul>
      <li className="footer__item">EUR - 4,7101</li>
      <li className="footer__item">USD - 4,8291</li>
      <li className="footer__item">GBP - 5,4330</li>
      <li className="footer__item">CHF - 4,7697</li>
    </ul>
  </footer>
)

export default Footer;