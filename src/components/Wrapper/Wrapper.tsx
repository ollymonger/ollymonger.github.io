import { ResetTv } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import React, { useState, useRef } from 'react';
import { WrapperContainer } from './WrapperContainer';
import { WrapperControls } from './WrapperControls';
import { onMouseDown, onTouchStart, onWheel } from './WrapperUtils';

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const [scale, setScale] = useState<number>(0.8);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: -98, y: 129 });
  const ref = useRef<HTMLDivElement>(null);

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    onWheel({ event: event, setScale: setScale, scale: scale });
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    onMouseDown({ event: event, setPosition: setPosition, position: position })
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    onTouchStart({ event: event, setPosition: setPosition, position: position});
  };

  const handleReset = React.useCallback(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  },[])

  return (
    <div 
    ref={ref}
    onWheel={handleWheel}
    onMouseDown={handleMouseDown}
    onTouchStart={handleTouchStart}

    style={{
      height:'100%',
      width:'100%'
    }}>
      <WrapperControls handleReset={handleReset} info={{scale, position}} />      
      <WrapperContainer scale={scale} position={position}>
        {children}
      </WrapperContainer>
    </div>
  );
};

export default Wrapper;
