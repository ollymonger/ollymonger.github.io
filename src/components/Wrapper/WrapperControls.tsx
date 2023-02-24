import { ResetTv } from "@mui/icons-material"
import { Button, Typography } from "@mui/material"
import React from "react"

export const WrapperControls = ({handleReset} : { handleReset: () => void } ) => {
  return (
    <div style={{
      position:'absolute',
      top:0,
      left:0,
      zIndex:1000
    }}>
      <Button variant="contained" onClick={handleReset}>
          
          <ResetTv style={{fontSize:'4rem', paddingRight:'0.5em'}}/>
        <Typography variant="h3" fontSize={"5rem"}>
          Reset
        </Typography>
      </Button>
    </div>
  )
}
