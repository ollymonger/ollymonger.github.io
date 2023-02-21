import { Grid } from "@mui/material";
import React from "react";

export function Header() {
  return (
      <Grid container direction="row" columns={8} justifyContent="space-between" alignItems="center" style={{display:'flex', width:'100%', height:'100%'}}>
        <Grid item xs={0} lg={1}></Grid>
        <Grid item xs={2} lg={2}>
          yllo.cc
        </Grid>
        <Grid item xs={4} lg={3}></Grid>
        <Grid item xs={2} lg={1}>
          test hello
        </Grid>
        <Grid item xs={0} lg={1}></Grid>

      </Grid>
  )
}
