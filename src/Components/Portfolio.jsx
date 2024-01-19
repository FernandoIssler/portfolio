/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/issler-desk-surface.jpg";

const imageAltText = "desktop with paints and brushes on a table";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "FADBAQUADRAS - More organization for the sports directory. ⚽️ 🏀 🎾 🏐",
    description:
      "The court reservation organization and control system is available to all athletes at the FADBA institution.",
    url: "https://www.fadbaquadras.com.br/",
  },
  {
    title: "Find your student registration number",
    description:
      "Find your RA is the name of the project that makes it easier for FADBA students to obtain their registration number",
    url: "https://isslerweb.com.br/encontreseura/",
  },
  {
    title: "OneLex - A virtual office for lawyers",
    description:
      "OneLex is an entrepreneurial project, which aims to provide a virtual office for legal professionals.",
    url: "https://onelex.com.br/",
  },
  {
    title: "Control for the Financial Market",
    description:
      "With TradeControl, financial market operators will be able to control each of their purchases and sales in detail.",
    url: "https://www.tradecontrol.com.br/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;