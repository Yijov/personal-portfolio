import React from "react";
import { SmallHorizontalLine } from "../../components";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa";
import { IoMdMail, IoMdCall, IoLogoWhatsapp } from "react-icons/io";

export default function ContactsIcons() {
  return (
    <div>
      <SmallHorizontalLine color="white" />
      <div className="social icons">
        <a href="https://github.com/Yijov" rel="noreferrer" target="_blank">
          {" "}
          <AiOutlineGithub
            style={{ fontSize: "2.5rem", marginRight: "0.5rem" }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/yirbett-joseph-a44161144"
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
      <SmallHorizontalLine color="white" />
    </div>
  );
}