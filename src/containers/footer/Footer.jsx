import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";
import { VscLocation } from "react-icons/vsc";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__header">
        <h3 className="gradient-text">
          Do you want to step into the future before others?
        </h3>
        <a href="/">Request Early Access</a>
      </div>
      <div className="footer__links">
        <div className="footer__links--logo">
          <img src={logo} alt="GPT-3 Logo" />
        </div>

        <div className="footer__links--link">
          <span className="footer__links--link__header">Link</span>
          <ul className="footer__links--link__links">
            <li>
              <a href="/">Overons</a>
            </li>
            <li>
              <a href="/">Social Media</a>
            </li>
            <li>
              <a href="/">Counters</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer__links--company">
          <span className="footer__links--company__header">Company</span>
          <ul className="footer__links--company__links">
            <li>
              <a href="/">Terms & Condition</a>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer__links--contact">
          <span className="footer__links--contact__header">Get in touch</span>
          <div className="footer__links--contact__links">
            <a href="/">
              <VscLocation />
              <span>Crechterwoord K12 182 DK Alknjkcb</span>
            </a>
            <a href="tel:+2349137720796">
              <FiPhoneCall />
              <span>085-132567</span>
            </a>
            <a href="mailto:emmanuelsomtoh.o@gmail.com">
              <MdOutlineEmail />
              <span>info@gpt3.net</span>
            </a>
          </div>
        </div>
      </div>

      <span className="footer__copyright">
        &copy; 2023 GPT-3. All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
