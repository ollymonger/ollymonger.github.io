import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { useZoomableContext } from "../Wrapper/Context";
import { ZoomableContainer } from "react-zoomable-container";
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

const sun = { name: "Sun", color: "#ffeb3b", diameter: 65, image:"/sun.png" };


const CustomControls = () => {
  const { handleReset, info } = useZoomableContext();

  return (
    <div style={{
      position:'absolute',
      top:0,
      left:0,
      zIndex:1000,
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      padding:'1em'
    }}>
      <Button onClick={handleReset}>Reset</Button>
      <Typography variant="caption" fontSize={"1rem"} style={{paddingLeft:'1em', color:"gray"}}>
        {`Scale: ${info.scale.toFixed(2)} | Position: x${info.position.x.toFixed(2)}, y${info.position.y.toFixed(2)}`}
      </Typography>
    </div>  
  );
}

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
        <ZoomableContainer controlOverrides={
          {
            scale: 1,
            position: { x: 0, y: 0 },
            lerpTime: 200,
            scaleStep: 0.5,
            maxScale: 2,
            minScale: 0,
          }
        }>
          <div className={classes.sun} style={{ backgroundColor: "none", width: sun.diameter, height: sun.diameter, left: sunPosition.x, top: sunPosition.y }}>
            <img src={sun.image} alt={sun.name} style={{ width: sun.diameter * 2, height: sun.diameter * 2 }} />
          </div>
          {planets.map((planet, i) => {
            const { name } = planet;
            const { x, y } = positions(planets)[i];
            return <Planet key={name} planet={{ ...planet }} position={{x, y}} sun={sunPosition} className={classes.planet} />;
          })}
        </ZoomableContainer>
      </div>
  );
};

export default HeliocentricDiagram;
