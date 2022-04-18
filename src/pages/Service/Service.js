import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
const Service = (props) => {
  const {name,img,description}=props.service;
    return (
      
        

           
        <Grid items  xs= {12} sm={6} md={4} >
        <Card sx={{ minWidth: 275,m:2 }}>
           <CardMedia
        component="img"
        style={{width:'auto', height:'80px', margin:'0 auto'}}
        image={img}
        alt="Paella dish"
      />
      <CardContent>
      
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         {name}
        </Typography>
        
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {description}
        </Typography>
       
      </CardContent>
      
    </Card> 
      </Grid>  
        
    );
};

export default Service;