function Navigation()
{
      return (
            <nav id="nav">
                  <div id="navlogo">
                        <a href="index.html"><img src="media/logoKdesign.png" alt="" /></a>
                  </div>

                  <div className="hamburger">
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                  </div>

                  <div className="nav-links">
                        <div className="dropdown">
                              <div className="dropbtn"><a href="services.html">TJÄNSTER &emsp;</a></div>
                        </div>

                        <div className="dropdown">
                              <div className="dropbtn"><a href="projects.html">PROJEKT&emsp;</a></div>
                        </div>

                        <div className="dropdown">
                              <div className="dropbtn"><a href="contact.html">KONTAKT&emsp;</a></div>
                        </div>

                        <div className="dropdown">
                              <div className="dropbtn"><a href="about.html">OM OSS&emsp;</a></div>
                        </div>
                  </div>

                  <div id="lines"></div>
            </nav>
      );
}

export default Navigation;
