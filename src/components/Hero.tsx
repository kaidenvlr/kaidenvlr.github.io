import React from "react";

const Hero: React.FC = () => {
    return (
        <div className="container hero">
            <h1 style={{textAlign: "center"}}>Hello, I'm Zhanibek.</h1>
            <div className="tags-grid-1">
                <ul className="tags">
                    <li>Experienced in backend and frontend development.</li>
                    <li>Currently working as a Full-stack developer at <a href="https://aifc.kz">AIFC</a>.</li>
                    <li>Also interested in exploring new technologies, systems design and performance optimization.</li>
                    <li>A quick learner and always looking for new challenges.</li>
                </ul>
            </div>
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
