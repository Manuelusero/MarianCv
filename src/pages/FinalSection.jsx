import './FinalSection.css';
import bannerImage from '/FotoFooter.png'; 
import { FaYoutube, FaInstagram, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const FinalSection = () => {
  return (
    <section className="final-section">
      <img src={bannerImage} alt="Mariano O. on stage" className="final-banner" />

      <footer className="footer">
        <div className="footer-content">
          <h2 className="footer-name">
            MARIANO<span>ANGA</span>
          </h2>
          <div className="footer-icons">
            <FaYoutube />
            <FaInstagram />
            <FaEnvelope />
            <FaWhatsapp />
          </div>
        </div>
      </footer>
    </section>
  );
};

export default FinalSection;
