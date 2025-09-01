import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="about !py-[60px] !px-0 !bg-gradient-to-br !from-[#f8f9fa] !to-[#e9ecef]"
    >
      <div className="container">
        <h2 className="section-title text-center text-[2.5rem] !mb-12 text-[#333] relative">
          About Me
        </h2>

        <div className="about-content grid grid-cols-[1fr_2fr] gap-12 items-center">
          <div className="stats-grid grid gap-8">
            <div className="stat-item">
              <span className="stat-number">1+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">8+</span>
              <span className="stat-label">Technologies</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">9.39</span>
              <span className="stat-label">CGPA</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Dedication</span>
            </div>
          </div>

          <div className="about-text text-[1.1rem] leading-7 text-[#555]">
            <p>
              I'm a passionate Frontend Developer at WeeTech Solution,
              specializing in building responsive, scalable web applications
              using modern JavaScript frameworks. With expertise in React,
              Angular, TypeScript, and JavaScript, I create intuitive user
              interfaces that deliver seamless user experiences.
            </p>

            <p>
              My technical foundation includes HTML5, CSS3, Tailwind CSS,
              Material-UI, and Angular Material, with proficiency in state
              management using Redux and Redux Toolkit. I'm committed to writing
              clean code, optimizing performance, and staying current with the
              latest frontend development trends.
            </p>

            <p>
              As a recent Computer Engineering graduate with a 9.39 CGPA, I
              bring fresh perspectives combined with practical experience from
              my role at WeeTech Solution. I'm always eager to collaborate on
              innovative web solutions and exciting development opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
