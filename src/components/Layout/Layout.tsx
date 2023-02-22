import { Grid } from "@mui/material";
import React from "react";
import { Header } from "../Header/Header";

type LayoutProps = {
  children: React.ReactNode;
  desktop?: boolean;
}

const Layout = ({ children, desktop }: LayoutProps) => {
  return (
    <Grid container direction="row" columns={4} style={{background:'red', display:'flex', width:'100%', height:'100%'}}>
      <Grid item xs={0} lg={0}></Grid>
      <Grid item xs={4} lg={4}>
        <div style={{display:'flex',background:'blue', width:'100%', height:'100%', overflow:'hidden'}}>
          <Grid container direction="column" columns={4}>
            <Grid item xs={1}><Header/></Grid>
            <Grid item xs={3}>{children}</Grid>
          </Grid>
        </div>
      </Grid>
      <Grid item xs={0} lg={0}></Grid>
    </Grid>
  )
}

export default Layout;
