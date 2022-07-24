import React from "react";
// import { RiMenu3Lin, RiCloseLine } from "./react-icons/ri";
import logo from "../../assets/logo.svg";
import "./nav.css";

const Navbar = () => {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links__container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#home">What is GPT?</a>
          </p>
          <p>
            <a href="#home">Open Ai</a>
          </p>
          <p>
            <a href="#home">Case Studio</a>
          </p>
          <p>
            <a href="#home">Library</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
