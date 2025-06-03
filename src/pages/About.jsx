import React, { useEffect } from "react";
import "./About.css";

const About = () => {
    useEffect(() => {
        // Hace scroll automático al cargar la página
        const topElement = document.getElementById("top");
        if (topElement) {
            topElement.scrollIntoView({ behavior: "smooth" });
        }
    }, []);
    return (
        <div id="about" className="about-wrapper">
            <div className="about-container">
                <h2 className="About">
                    SOBRE<span className="mi">&nbsp;MI</span>
                </h2>
                <p>
                    Soy periodista, productor y creador de contenido con más de diez años de experiencia en los principales medios argentinos. Con un enfoque en el entretenimiento, la cultura pop y la actualidad, en mis redes sociales ofrezco contenido creativo y entretenido que resuena con una audiencia joven y diversa.
                </p>
            </div>
        </div>
    );
};

export default About;

