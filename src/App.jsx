import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "./styles/index.css";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <>
      <header>
        <section id="home">
          <Header />
        </section>
      </header>
      <main>
        <section>
          <Hero />
        </section>
        <section id="about">
          <AboutMe />
        </section>
        <section id="projects">
          <Project />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <footer>
        {/* <ScrollToTop /> */}
        <Footer />
      </footer>
    </>
  );
}

export default App;
