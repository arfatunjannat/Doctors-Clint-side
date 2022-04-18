import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import doctor from '../../images/doctor.png';
import bg from '../../images/appointment-bg.png';
import { Typography } from '@mui/material';
import { SportsRugbySharp } from '@mui/icons-material';
import Button from '@mui/material/Button';

const appointmentBanner = {
    background : `url(${bg})`,
    backgroundColor:'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop:175
}
const AppointmentBanner = () => {

    return (
        <div>
            <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img  style={{width:400, marginTop: '-110px' }} src={doctor} alt="" />
        </Grid>
        <Grid item xs={12} md={6}>
        <Typography sx={{fontWeight:400, m: 2 , color:'cyan'}} variant="h6" component="h2">
            APPONTMENT
        </Typography>
        <Typography sx={{fontWeight:600, m: 2 , color:'white'}} variant="h2" component="h2">
            Make an appointment Today
        </Typography>
        <Typography sx={{fontWeight:200, m: 2 , color:'white'}} variant="h6" component="h2">
        Make an appointment TodayMake an appointment TodayMake an appointment TodayMake an appointment TodayMake an appointment TodayMake an appointment Today

        </Typography>
        <Button variant="contained" style={{backgroundColor: '#5CE7ED', margin:'30px',pading:'7px'}}>
        Learn More
      </Button>
        </Grid>
        
      </Grid>
    </Box>
        </div>
    );
};

export default AppointmentBanner;