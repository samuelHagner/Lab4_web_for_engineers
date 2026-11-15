import { Component } from "react";

class Home extends Component
{
      render()
      {
            return (
                  <>
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

                        <header id="header">
                              <video id="headermovie" autoPlay muted loop>
                                    <source src="media/introMovie.mp4" type="video/mp4" />
                              </video>
                        </header>

                              <div id="pageName2">
                                    <h1>VÄLKOMMEN TILL OSS</h1>
                              </div>

                              <div id="pageName">
                                    <p>Den mindre webbyrån som är verksamhet i större delen <br />av norrland. Vi löser dina problem, med kvalité.</p>

                                    <button id="contactBtn" type="button" name="contactNow">Kontakta oss</button>

                                    <img id="waveTop" src="svg/waves.svg" alt="vågor" />
                              </div>

                              <main>
                                    <div className="galleri">
                                          <div className="text__wrap">
                                                <h1>Din kompletta webbbyrå</h1>
                                                Kdesign är en webbyrå i norrland. Vi levererar tjänster och virituella produkter av högst grad, allt
                                                från foto- och videografi till hemsidor.
                                                <br /><br />
                                                Vi erbjuder bland annat tjänsterna:
                                                <br /><br />
                                                &rarr;  Porträtt & fastighetsfotografering
                                                <br />
                                                &rarr;  Webbutveckling och design
                                                <br />
                                                &rarr;  Teknisk konsultation & rådgivning
                                                <br />
                                                &rarr;  Drönartjänster
                                          </div>

                                          <div className="img__wrap">
                                                <img src="media/tech.webp" alt="Teknisk bild" />
                                          </div>
                                    </div>
                              </main>

                              <div id="threeImgs">
                                    <div className="heading">
                                          <div className="lineh"></div>  <h1>VAD VI KAN ERBJUDA DIG</h1> <div className="lineh"></div>
                                    </div>

                                    <div className="galleri2">
                                          <div className="img__wrap2">
                                                <div className="textimg">
                                                      <h1>Webbutveckling</h1>
                                                      <br /><br />
                                                      <div className="btn-bg bg-2">
                                                            <div className="btn btn-2">
                                                                  <button className="learnBtn">Läs mer</button>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>

                                          <div className="img__wrap3">
                                                <div className="textimg">
                                                      <h1>Drönartjänster</h1>
                                                      <br /><br />
                                                      <div className="btn-bg bg-2">
                                                            <div className="btn btn-2">
                                                                  <button className="learnBtn">Läs mer</button>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>

                                          <div className="img__wrap4">
                                                <div className="textimg">
                                                      <h1>Fotografi & videografi</h1>
                                                      <br /><br />
                                                      <div className="btn-bg bg-2">
                                                            <div className="btn btn-2">
                                                                  <button className="learnBtn">Läs mer</button>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>

                              <div className="mainHeaderText">
                                    <h1>Du kan sluta leta, vi sköter allt.</h1>
                                    Byggande av en unik och prestandafokuserad hemsida med ett skräddarsytt utseende, <br /> med funktioner som är anpassande för ditt exakta ändamål utan <br />några kompromisser, som alltid funkar dygnets alla timmar. <br />Det är vad vi på Kdesign levererar.
                              </div>

                              <div className="textMobile">
                                    <h2>Webbutveckling</h2>
                                    <div className="span">
                                          Vårt företag specialiserar sig på webbutveckling, där vi tar hand om uppdrag från kunder för att skapa skräddarsydda webblösningar. Vi fokuserar på att förstå våra kunders behov och visioner, och omvandlar dessa insikter till en detaljerad kravspecifikation. Detta är avgörande för att säkerställa att den slutliga webbplatsen eller applikationen inte bara möter, utan överträffar kundens förväntningar.
                                          <br /><br />
                                          Utvecklingsprocessen börjar med en noggrann planering och designfas, där vi utformar användargränssnitt och användarupplevelser som är både intuitiva och engagerande. Vi använder oss av de senaste teknologierna och ramverken för att bygga responsiva och tillgängliga webbplatser som fungerar på alla enheter och plattformar.
                                          <br /><br />
                                          Kvalitet är kärnan i vårt arbete, och vi strävar efter att leverera lösningar som inte bara är estetiskt tilltalande, utan också robusta, säkra och skalbara. Vi är stolta över vår förmåga att leverera projekt i tid och inom budget, vilket har hjälpt oss att bygga långvariga relationer med våra kunder.
                                    </div>
                              </div>

                              <div className="textMobile">
                                    <h2>Webbhotell & domännamn</h2>
                                    <div className="span">
                                          Vi är experter på webbhotell och domännamn och samarbetar med Loopia för att erbjuda dig de snabbaste och mest pålitliga domänservrarna på marknaden, till ett konkurrenskraftigt pris.
                                          <br /><br />
                                          Vi tar hand om allt som rör ditt domännamn och webbhotell så att du kan fokusera på att skapa innehåll till din hemsida. Vi vet att det kan vara knepigt att navigera i den digitala världen, men vi finns här för att göra det enklare för dig.
                                          <br /><br />
                                          Med vår långa erfarenhet inom IT-branschen och passion för att leverera högkvalitativa lösningar, kan du vara säker på att vi finns här för att hjälpa dig. Vi vill att du ska känna dig välkommen och bekväm när du väljer oss som din leverantör av webbhotell och domännamn.
                                          <br /><br />
                                          Tveka inte att höra av dig om du har några frågor eller vill ha hjälp att skapa din online-närvaro. Vi ser fram emot att höra från dig och att hjälpa dig att ta dina första steg på nätet.
                                    </div>
                              </div>

                              <div className="mainGallery">
                                    <div className="wrapText">
                                          <h2>Webbutveckling</h2>
                                          <div className="span">
                                                Vårt företag specialiserar sig på webbutveckling, där vi tar hand om uppdrag från kunder för att skapa skräddarsydda webblösningar. Vi fokuserar på att förstå våra kunders behov och visioner, och omvandlar dessa insikter till en detaljerad kravspecifikation. Detta är avgörande för att säkerställa att den slutliga webbplatsen eller applikationen inte bara möter, utan överträffar kundens förväntningar.
                                                <br /><br />
                                                Utvecklingsprocessen börjar med en noggrann planering och designfas, där vi utformar användargränssnitt och användarupplevelser som är både intuitiva och engagerande. Vi använder oss av de senaste teknologierna och ramverken för att bygga responsiva och tillgängliga webbplatser som fungerar på alla enheter och plattformar.
                                                <br /><br />
                                                Kvalitet är kärnan i vårt arbete, och vi strävar efter att leverera lösningar som inte bara är estetiskt tilltalande, utan också robusta, säkra och skalbara. Vi är stolta över vår förmåga att leverera projekt i tid och inom budget, vilket har hjälpt oss att bygga långvariga relationer med våra kunder.
                                          </div>
                                    </div>

                                    <div className="wrapImg"></div>
                              </div>

                              <div className="mainGallery">
                                    <div className="wrapImg2"></div>

                                    <div className="wrapText">
                                          <h2>Webbhotell & domännamn</h2>
                                          <div className="span">
                                                Vi är experter på webbhotell och domännamn och samarbetar med Loopia för att erbjuda dig de snabbaste och mest pålitliga domänservrarna på marknaden, till ett konkurrenskraftigt pris.
                                                <br /><br />
                                                Vi tar hand om allt som rör ditt domännamn och webbhotell så att du kan fokusera på att skapa innehåll till din hemsida. Vi vet att det kan vara knepigt att navigera i den digitala världen, men vi finns här för att göra det enklare för dig.
                                                <br /><br />
                                                Med vår långa erfarenhet inom IT-branschen och passion för att leverera högkvalitativa lösningar, kan du vara säker på att vi finns här för att hjälpa dig. Vi vill att du ska känna dig välkommen och bekväm när du väljer oss som din leverantör av webbhotell och domännamn.
                                                <br /><br />
                                                Tveka inte att höra av dig om du har några frågor eller vill ha hjälp att skapa din online-närvaro. Vi ser fram emot att höra från dig och att hjälpa dig att ta dina första steg på nätet.
                                          </div>
                                    </div>
                              </div>

                              <div id="nice">
                                    <br /><br />
                                    <div id="niceImg"></div>

                                    <div id="niceText">
                                          <h3>Ett riktigt schysst innehåll</h3>
                                          Vi har en stor erfarenhet om hur man skapar en riktigt schysst virituell identitet till alla typer av företag. Det gör vi genom
                                          att designa och utforma hemsidan på ett sätt som är format kring företaget och med färger, bilder och uttryck som är eller ska vara associerade med företaget.
                                          <br />
                                          <button id="conBtn" type="button" name="contactNow">Kontakta oss</button>
                                    </div>
                              </div>

                              <footer>
                                    <div className="container">
                                          <div className="row">
                                                <div className="footer-col">
                                                      <h4>Om företaget</h4>
                                                      <ul>
                                                            <li><a href="about.html">Om oss</a></li>
                                                            <li><a href="services.html"> Tjänster</a></li>
                                                            <li><a href="projects.html">Projekt</a></li>
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
                                                            <li><a href="table.html">Tabell</a></li>
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
                  </>
            );
      }
}

export default Home;
