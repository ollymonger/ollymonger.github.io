import React from "react";
import { Box, Drawer, Grid, Typography } from "@mui/material";
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import { Divider } from "@mui/material";

//Children here is the body.
function LayoutDesktop({children} : {children: React.ReactNode}) {
  return (
    <Grid container direction="row" style={{width:'100%', height:'100%'}}>
      <Grid item md={2} style={{background:'#bcb8b1', borderRight:'2px dotted #8a817c', borderLeft:'3px solid #8a817c', padding:'1.5em', display:'flex', width:'100%', height:'100%'}}>
        <Grid container direction="column" style={{width:'100%', height:'100%'}}>
          <Grid item md={2} style={{height:'100%'}}>
          </Grid>
          <Grid item md={4} style={{height:'100%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
             <RecentActorsIcon style={{fontSize:'3rem'}}/>
              <Typography variant="h6">yllo.cc</Typography>
              <Typography variant="subtitle1" style={{textAlign:'center', width:'75%'}}>Check out my posts to the right!</Typography>
          </Grid>
          <Grid item md={5} style={{height:'100%', width:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Divider orientation="vertical" style={{height:'75%', width:'2px', background:'#8a817c'}}/>
          </Grid>
          <Grid item md={1} style={{height:'100%', display:'flex', flexDirection:'row', justifyContent:'flex-end'}}>
            <Typography variant="caption">
              © 2023 yllo.cc
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={10} style={{background:'#463f3a', color:'#f4f3ee', padding:'1.5em', overflow:'auto', display:'flex', width:'75%', height:'100%'}}>
          {children}
      </Grid>
    </Grid>    
  );
}

export default LayoutDesktop;
