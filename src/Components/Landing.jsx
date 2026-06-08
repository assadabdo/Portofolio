import React from "react";
import Button from "@mui/material/Button";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import logo from "../imgs/WhatsApp Image 2026-06-01 at 10.49.07 PM.jpeg";
export const Landing = () => {
  return (
    <div className="landing " id="home">
      <div className="overlay">
        <div className="intro">
          <p>
            Hi there, I am <span> Assad </span> {"  "}
          </p>

          <p>
            {" "}
            Wellcome to my page , I hope you will have good experience. Enjoy
            the journey
          </p>
          <div className="intro-buttons">
            <a href="#project">
              <Button
                variant="contained"
                endIcon={<ArrowOutwardIcon sx={{ color: "white" }} />}
              >
                View my work
              </Button>
            </a>
            <a href="#contact">
              {" "}
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "var(--accent)",
                  // borderColor: "var(--primary)",
                }}
              >
                Get in touch
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
