"use client";

import { FC, useEffect, useRef, useState } from "react";
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
  const isDraggingRef = useRef<boolean>(false);

  useEffect(() => {
    const parsedUrl = new URL(window.location.href);
    const versionParam = parsedUrl.searchParams.get("version");
    const parsedVersion = versionParam
      ? parseInt(versionParam, 10)
      : ACTIVE_VERSION_DEFAULT;

    if (!Number.isNaN(parsedVersion)) {
      console.log("Current version:", parsedVersion);
      setVersion(parsedVersion);
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) {
        return;
      }

      const newWidth = Math.max(200, Math.min(600, e.clientX));
      setSidePanelWidth(newWidth);
    };

    const handleMouseUp = () => {
      if (!isDraggingRef.current) {
        return;
      }

      isDraggingRef.current = false;
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };
  }, []);

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
