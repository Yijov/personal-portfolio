import React from "react";
import HorizontalLine from "../horizontal_line/HorizontalLine";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa";
import { IoMdMail, IoMdCall, IoLogoWhatsapp } from "react-icons/io";

import { Link } from "react-router-dom";

 const Footer = () => {
  return (
    <div className="footer">
    <div className="pageParts">
      <ul>
        <li>
          <Link className="footerLink" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="footerLink" to="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className="footerLink" to="/knowledge">
            Knowledge
          </Link>
        </li>
        <li>
          <Link className="footerLink" to="/about">
            About
          </Link>{" "}
        </li>
        <li>
          <Link className="footerLink" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
    <HorizontalLine color="white" />
    <div className="social icons">
      <a href="https://github.com/Yijov" rel="noreferrer" target="_blank">
        {" "}
        <AiOutlineGithub
          style={{ fontSize: "2.5rem", marginRight: "0.5rem" }}
        />
      </a>
      <a
        href="www.linkedin.com/in/yirbett"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedinIn style={{ fontSize: "2.5rem", marginTop: "0.5rem" }} />
      </a>
      <a href="mailto:yirbett@gmail.com" target="_blank" rel="noreferrer">
        <IoMdMail
          style={{
            fontSize: "2.5rem",
            marginTop: "0.5rem",
            marginLeft: "0.5rem",
          }}
        />
      </a>
    </div>
    <div className="phone">
      <FaTelegram />
      <IoMdCall />
      <IoLogoWhatsapp />
      <div className="phoneNumber">(829) 619-4322</div>
    </div>
    <HorizontalLine color="white" />
    Copyright © 2021 Yirbett Joseph
  </div>
  )
}

export default Footer;