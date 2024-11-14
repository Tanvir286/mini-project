import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Outlet } from 'react-router-dom';


const Home = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <h1>Menu</h1>
          </Grid>
          <Grid item xs={10}>
            <Outlet />
          </Grid>
         
        </Grid>
      </Box>
    );
};

export default Home; 