import React, { useEffect, useState } from "react";

export type Planet = { 
  name: string; 
  color: string; 
  image?:string;
  distanceFromParent: number; 
  diameter: number; 
  orbitalPeriod: number
  moons?: Moon[]
}

type Position = { x: number; y: number; };

export type Moon = Planet;

export function Planet({
  planet,
  position: { x, y },
  sun,
  className
}: {
  planet: Planet;
  position: Position;
  sun: Position;
  className?: string;
}) {
  const { name, color, diameter, distanceFromParent, orbitalPeriod } = planet;

  const [time, setTime] = useState(0);

  useEffect(() => {
    const animate = () => {
      setTime((t) => t + 1);
      requestAnimationFrame(animate);
    }
    animate();
  }, []);

  

  return (
    <div
      key={name}
      className={className}
      style={{ 
        background: color, 
        position:'absolute', 
        width: diameter, height: diameter, 
        left: (sun.x + 35) + x * Math.PI, top: (sun.y + 35) - y * Math.PI 
      }}
    >
      <img src={planet.image} alt={planet.name} style={{width:'100%', height:'100%'}}/>
      {planet.moons?.map((moon) => {

        const getPos = (): Position => {
          const { distanceFromParent, orbitalPeriod } = moon;
          const orbitalRadius = distanceFromParent * 24;
          const angle = (Math.PI / orbitalPeriod) * time / 24;
          const x = Math.cos(angle) * orbitalRadius;
          const y = Math.sin(angle) * orbitalRadius;
          return { x, y };
        }


        return (
          <div
            key={moon.name}
            className={className}
            style={{ 
              background: moon.color, 
              position:'absolute', 
              width: moon.diameter, height: moon.diameter, 
              left: (getPos().x + 5) * Math.PI, top: (getPos().y + 10) * Math.PI 
            }}
          >
          </div>
        )
      })}
    </div>
  );
}
