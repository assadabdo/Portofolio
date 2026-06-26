import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Height, WidthFull } from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import React from "react";
// import { title } from "node:process";
import Button from "@mui/material/Button";
// import { error } from "node:console";

const serviceId = "service_whiep3c";
const TemplatId = "template_8cjl2ve";
const PublicKey = "22XQvrPzneiexuS2J";
export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const title = "Client Message";
  let em = document.getElementById("email");
  let n = document.getElementById("name");
  let m = document.getElementById("message");

  const handlesumbit = (e) => {
    e.preventDefault();
    const params = {
      name,
      email,
      message,
      title,
    };
    console.log("key", PublicKey);
    emailjs
      .send(serviceId, TemplatId, params, PublicKey)
      .then((respons) => {
        console.log("You have receive the messgae succefully", respons);
      })
      .catch((error) => {
        console.error("Error while seding", error);
      });
    setEmail("");
    setMessage("");
    setName("");
    em.value = "";
    n.value = "";
    m.value = "";
  };

  return (
    <div id="contact">
      <div className="headline">Contact Me</div>
      <div className="contact-cont">
        <div className="links">
          <div>
            <h2>Quick Contact links :</h2>
            <ul>
              <li>
                <EmailIcon
                  sx={{ margin: "0px 6px", color: "var(--primary)" }}
                ></EmailIcon>{" "}
                <a href="mailto:assadabdo665@gmail.com" target="_blank">
                  {" "}
                  assadabdo665@gmail.com
                </a>
              </li>
              <li style={{ marginRight: "83px" }}>
                <WhatsAppIcon
                  sx={{ margin: "0px 6px", color: "var(--primary)" }}
                ></WhatsAppIcon>
                <a href="https://wa.me/249997173532" target="_blank">
                  +249997173532
                </a>
              </li>
              <li style={{ marginRight: "53px" }}>
                <LinkedInIcon
                  sx={{ margin: "0px 6px", color: "var(--primary)" }}
                ></LinkedInIcon>
                <a
                  href="https://www.linkedin.com/in/assad-abdo-b32a1533a"
                  target="_blank"
                >
                  Assad Abdo LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <p>
            {" "}
            Or send me a messga through <span>Email</span>. Feel free to reach
            out{" "}
          </p>
        </div>
        <div className="special">
          <form className="message" onSubmit={handlesumbit}>
            <input
              id="name"
              onChange={(e) => setName(e.target.value)}
              placeholder="  Your Name "
              type="text"
              required
            ></input>
            <input
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="  Your Email "
              type="text"
              required
            ></input>
            <textarea
              id="message"
              onChange={(e) => setMessage(e.target.value)}
              placeholder="  write your message.."
              required
            ></textarea>
            <Button type="sumbit" variant="contained">
              {" "}
              Send message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
