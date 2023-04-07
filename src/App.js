import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Iphone14 from "./components/Iphone14/Iphone14";
import Iphone14Pro from "./components/Iphone14Pro/Iphone14Pro";
import Watch from "./components/Watch/Watch";
import Ipad from "./components/Ipad/Ipad";
import MacbookPro from "./components/MacbookPro/MacbookPro";
import HomePod from "./components/HomePod/HomePod";
import AirPods from "./components/AirPods/AirPods";
import Footer from "./components/Footer/Footer";
import Slider from "./components/Slider/Slider";

import img1 from "./components/Slider/image01.jpg";
import img2 from "./components/Slider/image02.jpg";
import img3 from "./components/Slider/image03.jpg";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Iphone14 />
      <Iphone14Pro />
      <Watch />

      <div className="dual-section">
        <Ipad />
        <MacbookPro />
      </div>
      <div className="dual-section">
        <HomePod />
        <AirPods />
      </div>
      <Slider>
        <img src={img1} alt="show" style={{ width: "100%", height: "100%" }} />
        <img src={img2} alt="show" style={{ width: "100%", height: "100%" }} />
        <img src={img3} alt="show" style={{ width: "100%", height: "100%" }} />
      </Slider>

      <Footer />
    </div>
  );
}

export default App;
