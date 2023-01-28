import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.svg";
import { Button } from "../../components/componentsExport";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="navbar">
      <a href="/" className="navbar__logo">
        <img src={logo} alt="GPT-3 Logo" />
      </a>
      <ul className="navbar__nav">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about">What is GPT?</a>
        </li>
        <li>
          <a href="#features">Open AI</a>
        </li>
        <li>
          <a href="#blogs">Case Studies</a>
        </li>
        <li>
          <a href="/">Library</a>
        </li>
      </ul>
      <div className="navbar__buttons">
        <a href="/">Sign in</a>
        <Button href="/" text="Sign up" />
      </div>

      <div className="navbar__mobile">
        <div
          className={
            mobileMenu
              ? "navbar__mobile--hamburger open"
              : "navbar__mobile--hamburger"
          }
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          <span></span>
        </div>

        {mobileMenu && (
          <ul className="navbar__mobile--menu scale-up-top">
            <li>
              <a href="/" onClick={() => setMobileMenu(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setMobileMenu(false)}>
                What is GPT?
              </a>
            </li>
            <li>
              <a href="#features" onClick={() => setMobileMenu(false)}>
                Open AI
              </a>
            </li>
            <li>
              <a href="blogs" onClick={() => setMobileMenu(false)}>
                Case Studies
              </a>
            </li>
            <li>
              <a href="/" onClick={() => setMobileMenu(false)}>
                Library
              </a>
            </li>
            <li>
              <a href="/" onClick={() => setMobileMenu(false)}>
                Sign in
              </a>
            </li>

            <li>
              <Button
                href="/"
                text="Sign up"
                onClick={() => setMobileMenu(false)}
              />
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
