import { Grid } from "@mui/material";
import React from "react";
import { Header } from "../Header/Header";

type LayoutProps = {
  children: React.ReactNode;
  desktop?: boolean;
}

const Layout = ({ children, desktop }: LayoutProps) => {
  return (
    <Grid container direction="row" columns={4} style={{background:'darkgray', display:'flex', width:'100%', height:'100%'}}>
      <Grid item xs={0} lg={1}></Grid>
      <Grid item xs={4} lg={2}>
        <Grid container direction="column" columns={12}>
          <Grid item xs={1} >

            <Header/>
          </Grid>
          <Grid item xs={1} style={{background:'darkgray'}}>
            {children}
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={0} lg={1}></Grid>
    </Grid>
  )
}

export default Layout;
