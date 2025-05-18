import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "./styles/index.css";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
