import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="container hero">
      <h1>Hello, I'm Zhanibek.</h1>
      <p>
        I'm a Full‑stack developer. I'm interested in backend and frontend
        development. I'm also interested in DevOps and AI. I'm currently working
        as a Full‑stack developer at <a href="https://aifc.kz">AIFC</a>.
      </p>
      <div className="cta">
        <a href="#projects" className="btn">
          Projects
        </a>
        <a href="#contact" className="btn secondary">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Hero;
