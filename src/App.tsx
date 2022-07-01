import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Presentation from './components/Presentation';
import About from './components/About';
import Features from './components/Features';
import Screenshots from './components/Screenshots';

function App() {
  const [presentationYposition, setPresentationYposition] = useState(0);

  return (
    <div className="App">
      <Header sticky presentationYposition={presentationYposition} />
      <Header />
      <Home />
      <Presentation />
      <About onYChange={(y: number) => setPresentationYposition(y)} />
      <Features />
      <Screenshots />
    </div>
  );
}

export default App;
