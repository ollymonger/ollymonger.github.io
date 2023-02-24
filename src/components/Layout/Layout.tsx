import { Grid } from "@mui/material";
import React from "react";
import { Header } from "../Header/Header";

type LayoutProps = {
  children: React.ReactNode;
  desktop?: boolean;
}

const Layout = ({ children, desktop }: LayoutProps) => {
  return (
    <Grid container direction="row" columns={4} style={{background:'black', display:'flex', width:'100%', height:'100%'}}>
      <Grid item xs={4} lg={4}>
          {children}
      </Grid>
    </Grid>
  )
}

export default Layout;
