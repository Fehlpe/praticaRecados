import React from 'react';

import Card from '../../components/card/Card'
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';


function Home() {
  return (
    <>
        <Link to="/">Home</Link>
        <Typography gutterBottom variant="h1">Bem vindo a página</Typography>
        
        <Grid item xs={12}>
          
          <Card/>
          <Card/>
         
        </Grid>
       
       
        
    </>
  )
}

export default Home;



