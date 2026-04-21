"use client";

import { FC } from "react";
import Awards from "./components/sections/Awards";
import CareerObjective from "./components/sections/CareerObjective";
import ContactInformation from "./components/sections/ContactInformation/ContactInformation";
import Education from "./components/sections/Education";
import Skills from "./components/sections/Skills";
import WorkExperience from "./components/sections/WorkExperience/WorkExperience";
import { useVersion } from "./hooks/useVersion";
import useResizer from "./hooks/useResizer";

import "./globals.scss";

const ACTIVE_VERSION_DEFAULT = 1;

const Resume: FC = () => {
  const version = useVersion(ACTIVE_VERSION_DEFAULT);
  const { sidePanelWidth, isDraggingRef } = useResizer();

  const handleMouseDown = () => {
    isDraggingRef.current = true;
    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";
  };

  return (
    <main className="page">
      <div className="side-panel" style={{ width: `${sidePanelWidth}px` }}>
        <ContactInformation />
        <Education version={version} />
        <Skills version={version} />
        <Awards version={version} />
      </div>
      <div className="resizer" onMouseDown={handleMouseDown}></div>
      <div className="main-panel">
        <Print />
        <CareerObjective version={version} />
        <WorkExperience version={version} />
      </div>
    </main>
  );
};
export default Resume;

const Print = () => {
  const handleClick = () => {
    window.print();
  };

  return (
    <div className="noPrint">
      <button className="button" onClick={handleClick}>
        Print
      </button>
    </div>
  );
};
