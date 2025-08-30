import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="!py-[60px] !px-0 bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef]"
    >
      <div className="container">
        <div className="hero-content grid grid-cols-[1fr_300px] gap-16 items-center">
          <div className="hero-text">
            <h1 className="text-black font-bold text-[3.5rem] !mb-4 leading-6">
              Frontend Developer
            </h1>
            <p className="subtitle text-[1.3rem] text-[var(--text-light)] !mb-8">
              Building beautiful, responsive web experiences
            </p>
            <p className="text-[1.1rem] text-[var(--text-light)] !mb-12 !max-w-[500px">
              Hi, I'm Dipika Sonkusre, a passionate Frontend Developer
              specializing in React, Angular, and modern JavaScript frameworks.
              I create scalable, user-friendly applications with clean code and
              exceptional performance.
            </p>

            <div className="flex gap-2">
              <button className="btn btn-info text-white rounded-[8px] !py-3 !px-[30px] font-semibold text-[0.95rem] inline-flex items-center gap-2 hover:bg-[#2980b9] transition duration-300 ease-in">
                Get In Touch
              </button>
              <button className="btn btn-neutral btn-outline rounded-[8px] !py-3 !px-[30px] font-semibold text-[0.95rem] inline-flex items-center gap-2">
                View My Work
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div
              className="card bg-white !p-8 rounded-[20px] 
         shadow-[0_10px_40px_rgba(0,0,0,0.1)] 
         text-center w-[280px]"
            >
              <div
                className="w-[90px] h-[90px] rounded-full 
         bg-[linear-gradient(135deg,var(--secondary-color),var(--accent-color))] 
         flex items-center justify-center 
         !mx-auto !mb-4 
         text-[2rem] text-white"
              >
                DS
              </div>
              <div className="card-body !mt-1 block !mx-auto">
                <div className="flex flex-col justify-center items-center max-w-[200px]">
                  <h3 className="text-black font-bold">Dipika Sonkusre</h3>
                  <p className="text-[var(--text-light)]">
                    Frondend Developer at WeeTech Solution
                  </p>
                </div>
                <div className="stats-row flex gap-4 !mt-6">
                  <div className="flex-1 text-center">
                    <span className="text-2xl font-bold text-[var(--secondary-color)] block">
                      1+
                    </span>
                    <span className="text-[0.8rem] text-[var(--text-light)] !mt-[0.2rem]">
                      Years Exp
                    </span>
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-2xl font-bold text-[var(--secondary-color)] block">
                      8+
                    </span>
                    <span className="text-[0.8rem] text-[var(--text-light)] !mt-[0.2rem]">
                      Tech Stack
                    </span>
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-2xl font-bold text-[var(--secondary-color)] block">
                      9.39
                    </span>
                    <span className="text-[0.8rem] text-[var(--text-light)] !mt-[0.2rem]">
                      CGPA
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
