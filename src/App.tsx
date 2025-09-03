import React, { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="container nav">
        <a href="#hero" className="brand" onClick={closeMenu}>
          kaidenvlr
        </a>
        <nav className="nav-links">
          <a href="#about">Tech Stack</a>
          <a href="#projects">Projects</a>
          <a href="#contact" className="btn">Contact</a>
        </nav>
        <button
          aria-label="Open menu"
          className="menu-toggle"
          onClick={() => setMenuOpen(true)}
        >
          <img src="/menu.svg" className="menu"/>
        </button>
      </header>
      <div
        className={menuOpen ? "backdrop open" : "backdrop"}
        onClick={closeMenu}
      />
      <aside className={menuOpen ? "mobile-drawer open" : "mobile-drawer"}>
        <a href="#about" onClick={closeMenu}>Tech Stack</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#contact" className="btn" onClick={closeMenu}>Contact</a>
        <button className="btn secondary" onClick={closeMenu}>Close</button>
      </aside>
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
