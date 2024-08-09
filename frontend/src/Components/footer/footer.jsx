import instagram from '../../multimedia/instagram.png';
import twitter from '../../multimedia/twitter.png';
import github from '../../multimedia/github.png';
import './footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="social-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" />
          </a>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="Twitter" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 F1 Store. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
