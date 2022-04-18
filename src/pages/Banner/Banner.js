import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../images/chair.png';
import bg from '../../images/bg.png'
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
const bannerBg = {
    background : `url(${bg})`,
    height:450
    
}

  

const Banner = () => {
    return (
        <div>
           <Box style={{bannerBg}}  sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        
        <Grid item  xs={12} md={6}>
       
        <Typography sx={{fontWeight:600, m: 2 , color:'gray'}} variant="h2" component="h2">
            Your New Smile Starts Here
        </Typography>
        <Typography sx={{fontWeight:200, m: 2 , color:'gray'}} variant="h6" component="h2">
        Make an appointment TodayMake an appointment TodayMake an appointment TodayMake an appointment TodayMake an appointment TodayMake an appointment Today

        </Typography>
        <Button variant="contained" style={{backgroundColor: '#5CE7ED', margin:'30px',pading:'7px'}}>
        GET APPOINTMENT
      </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <img  style={{width:400, marginTop:'25px',padding:'10px'}} src={chair} alt="" />
        </Grid>
      </Grid>
    </Box>
        </div>
    );
};

export default Banner;