import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <>
    <Navbar />
    <div className="main-container">
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
    </>
  );
}


export default App;
