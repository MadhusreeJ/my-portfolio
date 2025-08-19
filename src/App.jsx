import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import About from "./components/about";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import './App.css';

function App() {
  return (
    <>
  <Navbar />
  <About />
  <Skills />
  <Project />
  <Contact />
    </>
  )
}

export default App
