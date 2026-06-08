import React from "react";
import { useEffect, useState } from "react";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const closeMenu = () => setOpenMenu(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight - 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={scrolled ? "header scrolled" : "header"}>
      <div>assad.dv</div>
      <ul className={openMenu ? "displayed" : "non-displayed"}>
        <a href="#home" onClick={() => closeMenu()}>
          {" "}
          <li>Home</li>
        </a>
        <a href="#about" onClick={() => closeMenu()}>
          {" "}
          <li>About</li>
        </a>
        <a href="#project" onClick={() => closeMenu()}>
          {" "}
          <li>Projects</li>
        </a>
        {/* <li>Skills</li> */}
        <a href="#contact" onClick={() => closeMenu()}>
          {" "}
          <li>Contact</li>
        </a>
      </ul>
      <div className="Menu" onClick={() => setOpenMenu(!openMenu)}>
        {openMenu ? (
          <i className="fa-solid fa-xmark"></i>
        ) : (
          <i className="fa-solid fa-bars"></i>
        )}
      </div>
    </div>
  );
};
