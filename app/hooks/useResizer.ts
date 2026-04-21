import { useState, useRef, useEffect } from "react";

const useResizer = () => {
  const [sidePanelWidth, setSidePanelWidth] = useState<number>(315);
  const isDraggingRef = useRef<boolean>(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDraggingRef.current) {
        setSidePanelWidth(e.clientX);
      }
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);


  return { sidePanelWidth, isDraggingRef };
};

export default useResizer;
