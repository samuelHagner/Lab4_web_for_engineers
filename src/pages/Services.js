import { Component } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import "../styles/style.css";
import "../styles/styleResponsive.css";
import "../styles/navigation.css";

class Services extends Component
{
      render()
      {
            return (
                  <>
                        <Navigation />

                        <Header />

                            <div id="pageName2">
                                <h1>VÅRA TJÄNSTER</h1>
                            </div>
                            <div id="pageName">
                                <p>Vi kan erbjuda en komplett lösning för att representera <br /> er identitet på internet. Vi löser problemen, med kvalité.</p>

                                <button id="contactBtn" type="button" name="booknow">TIDIGARE PROJEKT</button>

                                <img id="waveTop" src="svg/waves.svg" alt="vågor" />
                            </div>

                            <br /><br />
                            <div id="rooms">
                                <div className="heading">
                                    <div className="lineh"></div>  <h1>VAD VI KAN ERBJUDA</h1> <div className="lineh"></div>
                                </div>

                                <div className="galleri2">
                                    <div className="img__wrap2">
                                        <div className="textimg">
                                            <h1>Webbutveckling</h1>
                                            <div className="span">Har du ett företag eller planerar på att starta ett så står vi till förfogande för att lösa alla tekniska problem. </div>
                                            <div className="btn-bg bg-2">
                                                <div className="btn btn-2">
                                                    <Link to="/services"><button className="learnBtn">Läs mer</button></Link>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="img__wrap3">

                                        <div className="textimg">
                                            <h1>Drönartjänster</h1>
                                            <div className="span">Vill du ha en invetering av din skog eller en snygg översiktsbild över din fastighet?</div>
                                            <div className="btn-bg bg-2">
                                                <div className="btn btn-2">
                                                    <Link to="/services"><button className="learnBtn">Läs mer</button></Link>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="img__wrap4">

                                        <div className="textimg">
                                            <h1>Fotografi & videografi</h1>
                                            <div className="span">Vi erbjuder allt från fastighetsfotografering till privat porträttfotografering.</div>
                                            <div className="btn-bg bg-2">
                                                <div className="btn btn-2">
                                                    <Link to="/services"><button className="learnBtn">Läs mer</button></Link>
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
                                    <h2>Drönartjänster</h2>
                                    <div className="span">
                                        Vårt företag erbjuder professionella drönartjänster som anpassas efter våra kunders unika behov och önskemål. Med en flotta av avancerade drönare är vi experter på att leverera högkvalitativa luftbilder och videor för en mängd olika tillämpningar, från fastighetsfotografering till inspektioner av infrastruktur och lantbruksövervakning. Vi förstår vikten av precision och detaljrikedom i vårt arbete och använder oss av den senaste teknologin för att säkerställa att våra kunder får överlägsna resultat varje gång.
                                        <br /><br />
                                        Säkerhet och efterlevnad är fundamentala principer i alla våra drönaroperationer. Vi följer strikt alla lokala och nationella regleringar och har omfattande procedurer för riskhantering för att säkerställa att våra flygningar genomförs på ett säkert och ansvarsfullt sätt. Vårt team består av certifierade drönarpiloter med omfattande erfarenhet och kunskap för att hantera alla typer av uppdrag.
                                        <br /><br />
                                        Vi är stolta över att leverera tjänster av högsta kvalitet och värde till våra kunder genom att använda drönarteknik för att möjliggöra nya perspektiv och insikter. Oavsett om det gäller att dokumentera en händelse från luften, inspektera svårtillgängliga strukturer eller samla geografiska data, är vårt team redo att hjälpa dig att uppnå dina mål. Kontakta oss för att utforska hur våra drönartjänster kan ge dig de resultat du behöver för ditt nästa projekt.
                                    </div>
                                </div>
                            </div>

                            <div className="mainGallery">
                                <div className="wrapText">
                                    <h2>Fotografi & videografi</h2>
                                    <div className="span">
                                        Vårt företag erbjuder specialiserade fotografi- och videografitjänster med fokus på webbutveckling, där vi skapar visuellt innehåll skräddarsytt för våra kunders hemsidor. Vi förstår vikten av att ha högkvalitativa bilder och videor som fångar besökarnas uppmärksamhet och förmedlar varumärkets budskap på ett effektivt sätt. Genom att kombinera teknisk expertis med kreativ vision, producerar vi innehåll som inte bara ser professionellt ut utan också optimeras för webben, vilket säkerställer snabb laddningstid och kompatibilitet över olika enheter.
                                        <br /><br />
                                        Varje projekt börjar med en genomgång av kundens mål och den målgrupp de önskar nå. Detta följs av en planeringsfas där vi bestämmer stämningen, stilen och de visuella element som ska framhävas. Vi använder den senaste utrustningen för att garantera bilder och videor av högsta kvalitet, från produktfotografering och porträtt till dynamiska videopresentationer som berättar din historia på ett engagerande sätt.
                                        <br /><br />
                                        Vårt mål är att erbjuda tjänster som inte bara höjer din webbplats estetiska appeal, utan också förbättrar användarupplevelsen och bidrar till en starkare närvaro online. Oavsett om det gäller att uppdatera befintligt material eller skapa helt nya visuella koncept, är vi här för att hjälpa dig att göra ditt digitala skyltfönster så inbjudande och effektfullt som möjligt. Kontakta oss idag för att diskutera hur vi kan förvandla din webbplats med professionellt framställt fotografi och videografi.
                                    </div>
                                </div>

                                <div className="wrapImg3"></div>
                            </div>

                            <br /><br /><br /><br />

                            <div id="bigBanner">
                                <div id="bannerImg">
                                    <div id="textimgres">
                                        <h2>PROJEKT AV ALLA STORLEKAR</h2>
                                        <br /><br />
                                        Vi tar oss ann alla problem ni har, kanske har du en fastighetsbyrå <br />och behöver en ny hemsida och en proffsfotograf, eller <br />
                                        så är du en skogsägare som vill ha sin skog inventerad med drönare i kampen <br />mot granbarkborren. Vi finns här för stora som små.
                                        <br />
                                        <div className="btn-bg bg-2">
                                            <div className="btn btn-2">
                                                <Link to="/projects"><button className="learnBtn">Läs mer</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Footer />
                  </>
            );
      }
}

export default Services;
