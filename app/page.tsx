"use client";

import { FC } from "react";
import Awards from "./components/sections/Awards";
import CareerObjective from "./components/sections/CareerObjective";
import ContactInformation from "./components/sections/ContactInformation/ContactInformation";
import Education from "./components/sections/Education";
import Skills from "./components/sections/Skills";
import WorkExperience from "./components/sections/WorkExperience/WorkExperience";

import "./globals.scss";

const Resume: FC = () => {
  const handleClick = () => {
    window.print();
  };

  return (
    <main className="page">
      <div className="side-panel">
        <ContactInformation />
        <Education />
        <Skills />
        <Awards />
      </div>
      <div className="main-panel">
        <CareerObjective />
        <WorkExperience />
      </div>
      <div className="noPrint">
        <button className="button" onClick={handleClick}>
          Print
        </button>
      </div>
    </main>
  );
};
export default Resume;
