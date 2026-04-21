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

  const handleClick = () => {
    window.print();
  };

  console.log("Current version:", version);

  return (
    <main className="page">
      <div className="side-panel">
        <ContactInformation />
        <Education version={version}/>
        <Skills version={version}/>
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
