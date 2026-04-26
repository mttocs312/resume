import { useEffect, useState } from "react";

export const useVersion = (activeVersionDefault: number) => {
  const [version, setVersion] = useState<number>(activeVersionDefault);

  useEffect(() => {
    const parsedUrl = new URL(window.location.href);
    const versionParam = parsedUrl.searchParams.get("version");
    const parsedVersion = versionParam
      ? parseInt(versionParam, 10)
      : activeVersionDefault;

    if (!Number.isNaN(parsedVersion)) {
      console.log("Current version:", parsedVersion);
      setVersion(parsedVersion);
    }
  }, []);

  return version;
};
