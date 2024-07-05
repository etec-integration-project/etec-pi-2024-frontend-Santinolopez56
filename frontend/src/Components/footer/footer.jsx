import instagram from '../../multimedia/instagram.png'
import twitter from '../../multimedia/twitter.png'
import github from '../../multimedia/github.png'
import './footer.css'
function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="social-icons">
          <img src={instagram} alt="Instagram" />
          <img src={github} alt="GitHub" />
          <img src={twitter} alt="Twitter" />
        </div>
      </div>
      <div className="copyright">
        &copy; F1 Store
      </div>
    </footer>
  );
}

export default Footer;