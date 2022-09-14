import React, { useState } from "react";
import { SmallHorizontalLine } from "../../components";
import { IoIosSend } from "react-icons/io";

 const  Contactform:React.FC<{hasHeading:boolean}> = ({hasHeading}) =>{
  const [submited, setSubmited] = useState(false);
  const [FromInfo, setFromInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  function chageOnSubmision() {
    setSubmited(!submited);
  }

  function handleChange(event:any) {
    const field = event.target.id;
    if (field === "name") {
      setFromInfo({ ...FromInfo, name: event.target.value });
    } else if (field === "email") {
      setFromInfo({ ...FromInfo, email: event.target.value });
    } else if (field === "message") {
      setFromInfo({ ...FromInfo, message: event.target.value });
    }
  }

  return (
    <form
      onSubmit={chageOnSubmision}
      action="https://formsubmit.co/yirbett@gmail.com"
      method="POST"
    >
      {hasHeading && (
        <>
          <h2>
            <IoIosSend style={{ fontSize: "2.3rem" }} />
          </h2>
          <h2>Contact Me</h2>
          <SmallHorizontalLine color={"#fff"} />

          <br />
        </>
      )}
      <input type="hidden" name="_subject" value="New submission!"></input>
      <input type="hidden" name="_captcha" value="false"></input>
      <input type="hidden" name="_next" value="./contacts"></input>
      <div className="inputGourp">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={FromInfo.name}
          onChange={handleChange}
          placeholder="Please enter your name"
          required
        />
      </div>
      <div className="inputGourp">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={FromInfo.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
      </div>
      <div className="inputGourp">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={FromInfo.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
        />
      </div>
      <button type="submit">Send</button>
    </form>
  );
}

export default Contactform;