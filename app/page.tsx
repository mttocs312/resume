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

  const currentUrl = new URL(window.location.href);
  let versionStr = currentUrl.searchParams.get("version");
  let version: number | null = null;

  if (versionStr === null) {
    version = 1; // Default version if none specified
  } else {
    version = parseInt(versionStr, 10);
  }
  console.log("Current version:", version);

  return (
    <main className="page">
      <div className="side-panel">
        <ContactInformation />
        <Education />
        <Skills />
        <Awards />
      </div>
      <div className="main-panel">
        <CareerObjective version={version} />
        <WorkExperience version={version} />
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
