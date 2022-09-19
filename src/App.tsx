import Header from './components/Header';
import Home from './components/Home';
import Presentation from './components/Presentation';
import About from './components/About';
import Features from './components/Features';
import Screenshots from './components/Screenshots';
import FunFacts from './components/FunFacts';
import OurTeam from './components/OurTeam';
import Contact from './components/Contact';
import Map from './components/Map';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Presentation />
      <About />
      <Features />
      <Screenshots />
      <FunFacts />
      <OurTeam />
      <Contact />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
