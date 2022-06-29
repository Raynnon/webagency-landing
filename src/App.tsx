import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Presentation from './components/Presentation';
import About from './components/About';
import Features from './components/Features';

function App() {
  const [presentationYposition, setPresentationYposition] = useState(0);

  return (
    <div className="App">
      <Header sticky presentationYposition={presentationYposition} />
      <Header presentationYposition={presentationYposition} />
      <Home />
      <Presentation />
      <About onYChange={(y: number) => setPresentationYposition(y)} />
      <Features />
    </div>
  );
}

export default App;
