import { Link } from "react-router-dom";

function Footer()
{
      return (
            <footer>
                  <div className="container">
                        <div className="row">
                              <div className="footer-col">
                                    <h4>Om företaget</h4>
                                    <ul>
                                          <li><Link to="/about">Om oss</Link></li>
                                          <li><Link to="/services"> Tjänster</Link></li>
                                          <li><Link to="/projects">Projekt</Link></li>
                                          <li><a href="#">Hitta oss</a></li>
                                    </ul>
                              </div>
                              <div className="footer-col">
                                    <h4>Kontakta oss</h4>
                                    <ul>
                                          <li><a href="mailto:info@kdesign.se">info@kdesign.se</a></li>
                                          <li><a href="tel:15555555555">07463316123</a></li>
                                          <li><a href="#">Umevägen 13B</a></li>
                                          <li><a href="#">91132 Vännäs</a></li>
                                    </ul>
                              </div>
                              <div className="footer-col">
                                    <h4>Kolla in</h4>
                                    <ul>
                                          <li><Link to="/table">Tabell</Link></li>
                                          <li><a href="#">Projekt</a></li>
                                          <li><a href="#">Prisexempel</a></li>
                                          <li><a href="#">Data Protection</a></li>
                                    </ul>
                              </div>
                              <div className="footer-col">
                                    <h4>Följ oss</h4>
                                    <div className="social-links">
                                          <a href="#"><i className="fab fa-facebook-f"></i></a>
                                          <a href="#"><i className="fab fa-twitter"></i></a>
                                          <a href="#"><i className="fab fa-instagram"></i></a>
                                          <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                              </div>
                        </div>
                  </div>
            </footer>
      );
}

export default Footer;
