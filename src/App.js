import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CommentSection from './components/CommentSection';

import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <CommentSection />
      <Footer />
    </div>
  );
}

export default App;
