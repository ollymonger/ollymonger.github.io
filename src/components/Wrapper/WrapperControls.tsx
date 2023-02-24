import { ResetTv } from "@mui/icons-material"
import { Button, Typography } from "@mui/material"
import React from "react"

export const WrapperControls = ({handleReset, info } : { handleReset: () => void, info: { scale: number, position: { x: number, y: number }} } ) => {
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
      <Button variant="contained" onClick={handleReset}>  
        <ResetTv style={{fontSize:'2rem', paddingRight:'0.5em'}}/>
        <Typography variant="h3" fontSize={"2rem"}>
          Reset
        </Typography>
      </Button>
      <Typography variant="caption" fontSize={"1rem"} style={{paddingLeft:'1em', color:"gray"}}>
        {`Scale: ${info.scale.toFixed(2)} | Position: x${info.position.x.toFixed(2)}, y${info.position.y.toFixed(2)}`}
      </Typography>
    </div>
  )
}
