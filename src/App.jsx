import { Suspense, lazy } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import Footer from "./components/Footer";
import "./styles/index.css";
import ScrollToTop from "./components/ScrollToTop";

const Contact = lazy(() => import("./components/Contact"));
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
          <Suspense fallback={<div>Loading Contact Form...</div>}>
            <Contact />
          </Suspense>
        </section>
      </main>
      <footer>
        <ScrollToTop />
        <Footer />
      </footer>
    </>
  );
}

export default App;
