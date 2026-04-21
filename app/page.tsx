"use client";

import { FC, useEffect, useState } from "react";
import Awards from "./components/sections/Awards";
import CareerObjective from "./components/sections/CareerObjective";
import ContactInformation from "./components/sections/ContactInformation/ContactInformation";
import Education from "./components/sections/Education";
import Skills from "./components/sections/Skills";
import WorkExperience from "./components/sections/WorkExperience/WorkExperience";

import "./globals.scss";

const ACTIVE_VERSION_DEFAULT = 1;

const Resume: FC = () => {
  const [version, setVersion] = useState<number>(ACTIVE_VERSION_DEFAULT);
  const [sidePanelWidth, setSidePanelWidth] = useState<number>(315);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  useEffect(() => {
    const url = window.location.href;

    const parsedUrl = new URL(url);
    const versionParam = parsedUrl.searchParams.get("version");
    const parsedVersion = versionParam
      ? parseInt(versionParam, 10)
      : ACTIVE_VERSION_DEFAULT;

    if (!Number.isNaN(parsedVersion)) {
      setVersion(parsedVersion);
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const newWidth = Math.max(200, Math.min(600, e.clientX));
        setSidePanelWidth(newWidth);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };

    if (isDragging) {
      document.body.style.cursor = "col-resize";
      document.body.style.userSelect = "none";
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  console.log("Current version:", version);

  const awards = version === 0 ? <Awards /> : null;

  return (
    <main className="page">
      <div className="side-panel" style={{ width: `${sidePanelWidth}px` }}>
        <ContactInformation />
        <Education version={version} />
        <Skills version={version} />
        {awards}
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
