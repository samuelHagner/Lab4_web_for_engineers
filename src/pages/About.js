import { Component } from "react";
import Navigation from "../components/Navigation.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import "../styles/style.css";
import "../styles/styleResponsive.css";
import "../styles/navigation.css";

class About extends Component
{
      render()
      {
            return (
                  <>
                        <Navigation />

                        <Header />

                              <div id="pageName2">
                                    <h1>OM OSS</h1>
                              </div>

                              <div id="pageName">
                                    <p>Den mindre webbyrån som är verksamhet i större delen <br />av norrland. Vi löser dina problem, med kvalité.</p>

                                    <button id="contactBtn" type="button" name="booknow">Kontakta oss</button>

                                    <img id="waveTop" src="svg/waves.svg" alt="vågor" />
                              </div>

                              <br /><br />

                              <div id="aboutGallery">
                                    <div className="heading">
                                          <div className="lineh"></div>  <h2>KDESIGN</h2> <div className="lineh"></div>
                                    </div>
                                    <div id="mer">
                                          "Mer än en vanlig webbyrå"
                                    </div>

                                    <div className="aboutImg">
                                          <div id="imgAbout">
                                                <img src="media/marslidensjö2.jpg" alt="" />
                                          </div>
                                          <div id="imgAbout2">
                                                <img src="media/profilbild2.jpg" alt="" />
                                          </div>
                                    </div>

                                    <div className="aboutImg">
                                          <div id="imgAbout4">
                                                <img src="media/stekenjokk2Fb.jpg" alt="" />
                                          </div>
                                          <div id="imgAbout5">
                                                <img src="media/marslidenn.jpg" alt="" />
                                          </div>
                                    </div>
                              </div>

                              <div className="mainHeaderText">
                                    <h1>En framgång, redan från början.</h1>
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
                                          <h2>Systemutveckling</h2>
                                          <div className="span">
                                                Vårt företag arbetar med systemutveckling, vilket innebär att vi tar emot uppdrag från kunder och formar en produkt genom olika utvecklingsmetoder. Vi lägger stor vikt vid att lyssna på våra kunder och sammanställa deras önskemål i en kravspecifikation för att säkerställa att den färdiga produkten uppfyller alla krav.
                                                <br /><br />
                                                När vi har skapat det första utkastet går vi igenom det med kunden för att säkerställa att vi har förstått alla önskemål korrekt. Vi satsar på kvalitet snarare än kvantitet för att våra kunder ska vara nöjda med slutresultatet.
                                                <br /><br />
                                                Vi är stolta över att ha arbetat med systemutveckling i många år och vår erfarenhet har gett oss en unik förmåga att skapa lösningar som möter våra kunders behov på ett effektivt sätt. Vi tror på att skapa långsiktiga relationer med våra kunder genom att erbjuda pålitliga och kvalitativa tjänster. Kontakta oss gärna om du vill veta mer om hur vi kan hjälpa dig med din nästa utvecklingsutmaning.
                                          </div>
                                    </div>

                                    <div className="wrapImg2"></div>
                              </div>

                              <div className="mainGallery">

                                    <div className="wrapImg3"></div>

                                    <div className="wrapText">
                                          <h2>Webbhotell & domännamn</h2>
                                          <div className="span">
                                                Välkommen till Scandinavian Web Solutions! Vi är experter på webbhotell och domännamn och samarbetar med Loopia för att erbjuda dig de snabbaste och mest pålitliga domänservrarna på marknaden, till ett konkurrenskraftigt pris.
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
                                          <button id="conBtn" type="button" name="booknow">Kontakta oss</button>
                                    </div>
                              </div>

                              <main>
                                    <div className="galleri">
                                          <div className="text__wrap">
                                                <h1>Din kompletta webbbyrå</h1>

                                                Kdesign är ett lokalt IT-företag i norrland. Vi levererar tjänster och virituella produkter av högst grad, allt
                                                från foto- och videografi till hemsidor. <br /><br />
                                                Vi erbjuder bland annat tjänsterna: <br /><br />
                                                &rarr;  Porträtt & fastighetsfotografering
                                                <br />
                                                &rarr;  Systemutveckling
                                                <br />
                                                &rarr;  Teknisk konsultation & rådgivning
                                                <br />
                                                &rarr;  Drönartjänster
                                          </div>

                                          <div className="img__wrap">
                                                <img src="media/tech.webp" alt="" />
                                          </div>
                                    </div>
                              </main>

                              <Footer />
                  </>
            );
      }
}

export default About;
