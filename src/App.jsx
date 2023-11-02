import Navbar from "./Components/Navbar/Navbar";
import HeroSection from "./Components/HeroSection/HeroSection";
import About from "./Components/About/About";
import Work from "./Components/Work/Work";

import "./App.css";
import GapLine from "./Components/GapLine/GapLine";

function App() {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <GapLine />
      <About />
      <GapLine />
      <Work />
    </div>
  );
}

export default App;
