/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const Header = () => {
  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "12rem",
        background: "rgba(255,255,255,0.75)",
        fontSize: "2rem",
        padding: "3rem",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      <a href="javascript:void(0);" onClick={() => scrollToElement("home")}>
        Home
      </a>
      <a href="javascript:void(0);" onClick={() => scrollToElement("about")}>
        About
      </a>
      <a href="javascript:void(0);" onClick={() => scrollToElement("portfolio")}>
        Portfolio
      </a>
      <a href="javascript:void(0);" onClick={() => scrollToElement("portfolio")}>
        Contact
      </a>
    </div>
  );
};

export default Header;