import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Services from "./pages/Services.js";
import Projects from "./pages/Projects.js";
import Contact from "./pages/Contact.js";
import About from "./pages/About.js";
import Table from "./pages/Table.js";

function App()
{
      return (
            <BrowserRouter>
                  <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/table" element={<Table />} />
                  </Routes>
            </BrowserRouter>
      );
}

export default App;
