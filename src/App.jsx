import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import AboutUs from "./Pages/Aboutus";
import Services from "./Pages/Services";
import ContactUs from "./Pages/Contactus";
import Solutions from "./Pages/Solutions";
import AwardsAndAccolades from "./Pages/AwardsAndAccolades";
import Media from "./Pages/Media";
import ScrollToTop from "./Components/Scrolltop"; 

function App() {
  return (
    <HashRouter>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/mediacoverage" element={<Media />} />
        <Route path="/awardsandaccolades" element={<AwardsAndAccolades />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
