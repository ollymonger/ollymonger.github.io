import { makeStyles } from "@mui/styles";
import React, { useCallback, useEffect, useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import { Planet } from "./planet/Planet";
import { useAnimation } from "./useAnimation";
import { useResize } from "./useResize";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    overflow:'hidden',
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
  const [speed, setSpeed] = useState(1);

  // useEffect to get container size
  useResize(setContainerSize);

  // Animation loop
  useAnimation(setTime, setSunPosition, sun, containerSize);

  const positions = React.useCallback((planets: Planet[]) => {
    return planets.map((planet) => {
      const { distanceFromParent, orbitalPeriod } = planet;
      const orbitalRadius = distanceFromParent * 24;
      const angle = (Math.PI / orbitalPeriod) * time / 24 * speed;
      const x = Math.cos(angle) * orbitalRadius;
      const y = Math.sin(angle) * orbitalRadius;
      return { x, y };
    });
  }, [planets, time, speed]);

  const containerRef = React.useRef<HTMLDivElement>(null);

  return (
      <div className={classes.container} id="helioscopic-diagram" ref={containerRef}>
        <Wrapper>
          <div className={classes.sun} style={{ backgroundColor: sun.color, width: sun.diameter, height: sun.diameter, left: sunPosition.x, top: sunPosition.y }} />
          {planets.map((planet, i) => {
            const { name } = planet;
            const { x, y } = positions(planets)[i];
            return <Planet key={name} planet={{ ...planet }} position={{x, y}} sun={sunPosition} className={classes.planet} />;
          })}
        </Wrapper>
      </div>
  );
};

export default HeliocentricDiagram;
