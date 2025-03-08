import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CommentSection from './components/CommentSection';
import VisitCounter from './components/VisitCounter';
import { useEffect } from "react";
import './App.css';

function App() {
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/visits`, {
      method: "GET",
    })
      .catch((err) => console.error("Error tracking visit:", err));
  }, []); // Runs only when the website loads
  return (
    <div>
      <VisitCounter />
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
