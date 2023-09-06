import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
// import { FaAngellist } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  // let getYear = () => {
  //   let currentYear = new Date().getFullYear();
  //   return currentYear;
  // };

  return (
    <footer>
      <a href="#home" className="footer__logo">
        Mohammad Rayyan
      </a>

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/mohammad-rayyan-040947258/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/RayyanRahman"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>
      {/* <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#certifications">Certification</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul> */}

      <div className="footer__copyright">
        {/* <small>&copy; ET {getYear()}. All rights reserved.</small> */}
        <small>&copy; All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
