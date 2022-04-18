import { HashRouter } from "react-router-dom";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import InfoSection from "./components/InfoSection";
import Navbar from "./components/Navbar";
import infoData from "./data/InfoData";
import sliderData from "./data/SliderData";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <HeroSection slides={sliderData} />
      {infoData.map((item) => (
        <InfoSection item={item} key={item.id} />
      ))}
      <Footer />
    </HashRouter>
  );
}

export default App;
