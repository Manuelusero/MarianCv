import React, { useEffect } from 'react';
import './ReachSection.css';

const ReachSection = () => {    useEffect(() => {
        // Hace scroll automático al cargar la página
        const topElement = document.getElementById("top");
        if (topElement) {
            topElement.scrollIntoView({ behavior: "smooth" });
        }
    }, []);
  return (
 <section id='reachSection' className="media-reach">
  <div className="media-header">
    <div className="media-top">
        <h2>
      MEDIA REACH<br />
      <strong>INSTAGRAM</strong>
    </h2>
      <div className="followers">
        <strong>150K</strong>
        <span>Seguidores</span>
      </div>
      <div className="age-range">
        <span className='numbers'>83,4%</span>
        <span>Entre 18 y 44 años</span>
      </div>
    </div>
  </div>
<div className="metrics-box">
  <div className="metrics-row">
    <h3 className='last-metric'>Métricas últimos 90 días</h3>
    <div className="metric">
      <span>Visualizaciones</span>
      <strong>5M</strong>
    </div>
    <div className="metric">
      <span>Cuentas Alcanzadas</span>
      <strong>1,2M</strong>
    </div>
    <div className="metric">
      <span>Interacciones</span>
      <strong>450K</strong>
    </div>
    <div className="metric">
      <span>“Me Gusta”</span>
      <strong>350K</strong>
    </div>
  </div>
</div>


</section>



    );
    }
export default ReachSection;
