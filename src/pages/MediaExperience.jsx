import React from 'react';
import './MediaExperience.css';

const MediaExperience = () => {
  return (
    <section className="media-experience-container">
      <div className="media-experience-title">
        TRAYECTORIA EN  <br /><span className='medios'>MEDIOS</span>
      </div>
      <ul className="media-experience-list">
        <li><strong>Perros de la Calle</strong> (Radio Metro) – Field Reporter, Columnist & Producer</li>
        <li><strong>Vos Sabés Que Sí</strong> (Radio Metro) – Host</li>
        <li><strong>PH, Podemos Hablar</strong> (Telefe) – Editorial Producer</li>
        <li><strong>Hola País</strong> (TV Pública) – Stream Host</li>
        <li><strong>La Casa Stream</strong> – Host of “Tengo Capturas”</li>
        <li><strong>Luzu TV</strong> – Executive Producer</li>
        <li><strong>Olga</strong> – Columnist & Field Reporter on “TDT”</li>
        <li><strong>Two Martín Fierro Award nominations for Best Field Reporter</strong></li>
      </ul>
    </section>
  );
}
export default MediaExperience;