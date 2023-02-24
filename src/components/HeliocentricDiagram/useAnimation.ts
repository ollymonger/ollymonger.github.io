import { useEffect } from "react";

const useAnimation = (
  setTime:React.Dispatch<React.SetStateAction<number>>,
  setSunPosition: ({ x, y }: { x: number; y: number }) => void,
  sun: { diameter: number },
  containerSize: { width: number; height: number }
) => useEffect(() => {
  const animate = () => {
    setTime((time) => time + 1);
    // get container size
    const { width, height } = document.getElementById("helioscopic-diagram").getBoundingClientRect();
    setSunPosition({ x: width / 2 - sun.diameter / 2, y: height / 2 - sun.diameter / 2 });
    requestAnimationFrame(animate);
  };
  animate();
}, [containerSize]);

export { useAnimation }
