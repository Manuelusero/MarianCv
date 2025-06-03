import "./Projects.css";
import React, { Fragment } from "react";

// Array en orden: logo, imagen, logo, imagen...
const elements = [
  { type: "logo", src: "/Logos/telefe.webp" },
  { type: "image", src: "/FotoLacasa.png" },
  { type: "logo", src: "/Logos/olga.png" },
  { type: "image", src: "/FotoNotero.png" },
  { type: "logo", src: "/Logos/images.png" },
  { type: "image", src: "/IMG_7596.jpg" },
  { type: "logo", src: "/Logos/metro951.png" },
  { type: "image", src: "/9781819b-b73d-473a-aeea-01038721f0a0 2.JPG" },
  { type: "logo", src: "/Logos/logo-luzu-2025.png" },
  { type: "image", src: "/IMG_7451.JPG" },
];

const Projects = () => {
  return (
    <div className="horizontal-scroll">
      {elements.map((el, index) => (
        <img
          key={index}
          src={el.src}
          alt={el.type}
          className={el.type === "logo" ? "logo-img" : "project-img"}
        />
      ))}
    </div>
  );
};

export default Projects;

