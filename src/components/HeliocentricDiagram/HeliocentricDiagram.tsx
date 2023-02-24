
import { Brightness1, Image } from "@mui/icons-material";
import { createStyles, Grid, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useCallback, useEffect, useState } from "react";
import { make3dTransformValue } from "react-quick-pinch-zoom";
import PinchZoom from "react-quick-pinch-zoom/esm/PinchZoom/component";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { Planet } from "./planet/Planet";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    display:'flex',
    width: "100%",
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  sun: {
    position: "absolute",
    borderRadius: "50%",
  },
  planet: {
    position: "absolute",
    borderRadius: "50%",
  },
}));

const sun = { name: "Sun", color: "#ffeb3b", diameter: 65 };


function HeliocentricDiagram({ planets }: { planets: Planet[]; }) {
  
  const classes = useStyles();
  const [time, setTime] = useState(0);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [sunPosition, setSunPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleResize = () => {
      const { width, height } = document.getElementById("helioscopic-diagram").getBoundingClientRect();
      setContainerSize({ width, height });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const animate = () => {
      setTime((t) => t + 1);
      // get container size
      const { width, height } = document.getElementById("helioscopic-diagram").getBoundingClientRect();
      setSunPosition({ x: width / 2 - sun.diameter / 2, y: height / 2 - sun.diameter / 2 });
      requestAnimationFrame(animate);
    };
    animate();
  }, [containerSize]);

  const positions = planets.map((planet) => {
    const { distanceFromParent, orbitalPeriod } = planet;
    const orbitalRadius = distanceFromParent * 24;
    const angle = (Math.PI / orbitalPeriod) * time / 24;
    const x = Math.cos(angle) * orbitalRadius;
    const y = Math.sin(angle) * orbitalRadius;
    return { x, y };
  });

  const containerRef = React.useRef<HTMLDivElement>(null);
  
  const onUpdate = useCallback(({ x, y, scale } : { x: number, y: number, scale: number}) => {
    const { current: container } = containerRef;

    if (container) {
      const value = make3dTransformValue({ x, y, scale });

      container.style.setProperty("transform", value);
    }
  }, []);


  return (
    <div className={classes.container} id="helioscopic-diagram" ref={containerRef}>
      <PinchZoom onUpdate={onUpdate} >
      <>
        <div className={classes.sun} style={{ backgroundColor: sun.color, width: sun.diameter, height: sun.diameter, left: sunPosition.x, top: sunPosition.y }} />
        {planets.map((planet, i) => {
          const { name } = planet;
          const { x, y } = positions[i];
          return <Planet key={name} planet={{ ...planet }} position={{x, y}} sun={sunPosition} className={classes.planet} />;
        })}
      </>
      </PinchZoom>
    </div>
  );
};

export default HeliocentricDiagram;
