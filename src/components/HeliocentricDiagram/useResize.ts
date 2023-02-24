import { useEffect } from "react";

export const useResize = (setContainerSize: ({width, height} : { width: number, height: number }) => void) =>   useEffect(() => {
  const handleResize = () => {
    const { width, height } = document.getElementById("helioscopic-diagram").getBoundingClientRect();
    setContainerSize({ width, height });
  };
  handleResize();
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);
