import { Container } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import chair from '../../../images/chair.png';
import Calender from '../../../Shared/Calender/Calender';
const AppointmentHeader = () => {
  
    return (

        <Container> 
      
      <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
        <Calender></Calender>
        </Grid>
        <Grid item xs={6}>
         <img src={chair} alt="" />
        </Grid>
        
      </Grid>
    </Box>
        
        
        </Container>
    );
};

export default AppointmentHeader;