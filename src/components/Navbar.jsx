

import React, { useState } from "react";
import { FaWhatsapp , FaEnvelope, FaBars, FaTimes, FaInstagram, FaYoutube } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            {/* Links normales en pantallas grandes */}
            <div className="links">
                <a href="#about" className="link">SOBRE MI</a>
                <a href="#reachSection" className="link">MÉTRICAS</a>
                <a href="#contact" className="link">TRAYECTORIA</a>
            </div>

            {/* Iconos de redes sociales siempre visibles */}
            <div className="socialLinks">
                <a href="https://www.instagram.com/marianoanga/" target="_blank" rel="noopener noreferrer" className="iconLink">
                    <FaInstagram />
                </a>
                <a href="https://www.youtube.com/@marianoanga" target="_blank" rel="noopener noreferrer" className="iconLink">
                    <FaYoutube />
                </a>
                <a href="mailto:mariano.angarolla@gmail.com" className="iconLink">
                    <FaEnvelope />
                </a>
                <a href="whatsappmarian" className="iconLink">
                     <FaWhatsapp />
                </a> 
            </div>

            {/* Botón menú hamburguesa (solo en móviles) */}
            <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes /> : <FaBars />}
            </div>

            {/* Menú lateral (solo en móviles) */}
            <div className={`dropdown-menu ${menuOpen ? "show" : ""}`}>
                <a href="#projects" className="link" onClick={() => setMenuOpen(false)}>PROYECTOS</a>
                <a href="#about" className="link" onClick={() => setMenuOpen(false)}>SOBRE MÍ</a>
                <a href="#contact" className="link" onClick={() => setMenuOpen(false)}>CONTACTO</a>
            </div>
        </nav>
    );
};

export default Navbar;
