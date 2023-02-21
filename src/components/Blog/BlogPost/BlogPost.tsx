import React from 'react';
import { Box, Card, CardHeader, Grid, Typography } from '@mui/material';

export type BlogPostProps = {
  id: number;
  title: string;
  body: string;
}


export function BlogPost({title, body}: BlogPostProps) {
  return (
    <Card sx={{background:'#463f3a', color:'#f4f3ee', width:'100%', height:'100%', padding:'1em'}}>
      <CardHeader title={title} sx={{color:'#f4f3ee'}}/>
      <Typography variant="body1" sx={{color:'#f4f3ee'}}>
        {body}
      </Typography>
    </Card>
  )
}
