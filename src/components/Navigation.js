import { Link } from "react-router-dom";

function Navigation()
{
      return (
            <nav id="nav">
                  <div id="navlogo">
                        <Link to="/"><img src="media/logoKdesign.png" alt="" /></Link>
                  </div>

                  <div className="hamburger">
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                  </div>

                  <div className="nav-links">
                        <div className="dropdown">
                              <div className="dropbtn"><Link to="/services">TJÄNSTER &emsp;</Link></div>
                        </div>

                        <div className="dropdown">
                              <div className="dropbtn"><Link to="/projects">PROJEKT&emsp;</Link></div>
                        </div>

                        <div className="dropdown">
                              <div className="dropbtn"><Link to="/contact">KONTAKT&emsp;</Link></div>
                        </div>

                        <div className="dropdown">
                              <div className="dropbtn"><Link to="/about">OM OSS&emsp;</Link></div>
                        </div>
                  </div>

                  <div id="lines"></div>
            </nav>
      );
}

export default Navigation;
