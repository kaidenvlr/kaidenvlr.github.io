import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

const App: React.FC = () => {
  return (
    <>
      <header className="container nav">
        <a href="#hero" className="brand">
          kaidenvlr
        </a>
        <nav>
          <a href="#about">About me</a>
          <a href="#projects">Projects</a>
          <a href="#contact" className="btn">
            Contact
          </a>
        </nav>
      </header>
      <main>
        <section id="hero" className="section">
          <Hero />
        </section>
        <section id="about" className="section alt">
          <About />
        </section>
        <section id="projects" className="section">
          <Projects />
        </section>
        <section id="contact" className="section alt">
          <Contact />
        </section>
      </main>
      <footer className="container footer">
        © {new Date().getFullYear()} kaidenvlr
      </footer>
    </>
  );
};

export default App;
