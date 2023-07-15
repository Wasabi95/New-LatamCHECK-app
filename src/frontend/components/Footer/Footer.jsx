import { Link } from "react-router-dom";
import "./Footer.css";
import greencheck from "./images/greencheck.png";
import lc2 from "./images/lc2.png"
import '@fortawesome/fontawesome-free/css/all.css';

function Footer() {
  return (
    <>
    <div className="full-footer">
      <div className="header footer-n">
      <Link to="/">
        <h1>
          <span>
            <span
              style={{
                fontFamily: "Raleway",
                color: "#e94272",
                fontWeight: "900",
                fontSize: "40px",
              }}
            >
              Latam
            </span>
            <span
              style={{
                fontFamily: "Roboto",
                color: "white",
                fontWeight: "900",
                fontSize: "40px",
              }}
            >
              CHECK.
            </span>
          </span>
          <img
            src={lc2}
            alt="Logo"
            height="80"
            className="d-inline-block align-top"
            style={{
              marginLeft: "0px",
              cursor: "pointer",
              verticalAlign: "middle",
            }}
          />
        </h1>
        </Link>
      </div>

      <div className="row">
        <div className="col-3 menu">
          <ul>
            <Link to="/products">
              <li>Estados Unidos</li>
              <li>Mexico</li>
              <li>America Latina</li>
              <li>Covid-19</li>
              <li>Medio Ambiente</li>
              <li>HOAX</li>
              <li>Resto del Mundo</li>
            </Link>
          </ul>
        </div>

        <div className="col-6">
        <h1 >Quienes Somos</h1>
        <div className="underlinetx"></div>
          <p>
            Discover the truth with LatamCHECK. We are dedicated to uncovering
            falsehoods, debunking myths, and verifying information. Our team of
            experts rigorously investigates claims and presents accurate
            findings. Trust us to keep you informed and empower you with
            verified facts.
          </p>
          
          <ul className="social-links center">
            <li>
              <Link to="/" target="_blank">
                <i className="fab fa-facebook"></i>
              </Link>
            </li>
            <li>
              <Link to="/" target="_blank">
                <i className="fab fa-github"></i>
              </Link>
            </li>
            <li>
              <Link to="/" target="_blank">
                <i className="fab fa-twitter"></i>
              </Link>
            </li>
            <li>
              <Link to="/" target="_blank">
                <i className="fab fa-linkedin"></i>
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-3 right">
          <div className="aside">
            <Link
              to="/about"
              className="about-link"
              style={{ textDecoration: "none" }}
            >
              <h2>Nosotros?</h2>
            </Link>
            <p>
              Uncover truth with LatamCHECK, your reliable source for
              fact-checking and debunking myths..
            </p>

            <Link
              to="/howdo"
              className="howdo-link"
              style={{ textDecoration: "none" }}
            >
              <h2>Como Verificamos?</h2>
            </Link>
            <p>
              Through rigorous investigation, LatamCHECK use methodologies to
              uncover falsehoods, verify information,..
            </p>
          </div>
        </div>
      </div>

      <div className="footer">
        <p>&copy; {new Date().getFullYear()} LatamCHECK. All rights reserved.</p>
      </div>
      </div>
    </>
  );
}

export default Footer;
