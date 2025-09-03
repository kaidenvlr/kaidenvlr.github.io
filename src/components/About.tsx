import React from "react";

const About: React.FC = () => {
  return (
    <div className="container about">
      <h2>About me</h2>
      <p>
        Experience in backend and frontend development. I'm interested in DevOps
        and AI. I'm currently working as a Full‑stack developer at{" "}
        <a href="https://aifc.kz">AIFC</a>. I'm also interested in Django,
        Python, NestJS, NextJS,React, TypeScript, Node.js, design systems and
        performance. I'm a quick learner and I'm always looking for new
        challenges.
      </p>
      {/* Tags grid */}
      <div className="tags-grid">
        <section>
          <h3>Languages:</h3>
          <ul className="tags">
            <li>Python</li>
            <li>Java</li>
            <li>Go</li>
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>SQL</li>
          </ul>
        </section>
        <section>
          <h3>Backend:</h3>
          <ul className="tags">
            <li>Django</li>
            <li>NestJS</li>
            <li>Express</li>
            <li>Gin</li>
            <li>Spring Boot</li>
          </ul>
        </section>
        <section>
          <h3>Frontend:</h3>
          <ul className="tags">
            <li>React</li>
            <li>NextJS</li>
            <li>Tailwind</li>
            <li>TypeScript</li>
            <li>Vite</li>
          </ul>
        </section>
        <section>
          <h3>Databases:</h3>
          <ul className="tags">
            <li>PostgreSQL</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>Redis</li>
          </ul>
        </section>
        <section>
          <h3>DevOps:</h3>
          <ul className="tags">
            <li>Docker</li>
            <li>CI/CD</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
