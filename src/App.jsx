import Navbar from "./Components/Navbar/Navbar";
import HeroSection from "./Components/HeroSection/HeroSection";
import About from "./Components/About/About";
import Work from "./Components/Work/Work";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />

      <About />
      <Work />
    </div>
  );
}

export default App;
