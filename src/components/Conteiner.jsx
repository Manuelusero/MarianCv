import React from 'react'
import "./Conteiner.css"

const Conteiner = () => {
    return (
        <div className='container'>
            <div className='img-container'>
                <img className='img1' src="/IMG_9946.JPG" alt="img profile" />
                
                {/* TEXTOS SOBRE LA IMAGEN */}
                <div className="overlay">
                    <div className="titulo-superior">
                        <h1 className="nombre">MARIANO<span>ANGA</span></h1>
                    </div>

                    <div className="titulo-inferior">
                        <p className="profesion">PERIODISTA / GENERADOR DE CONTENIDO</p>
                        <p className="mini">TV, RADIO, STREAM, PODCAST, REDES SOCIALES</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Conteiner;
