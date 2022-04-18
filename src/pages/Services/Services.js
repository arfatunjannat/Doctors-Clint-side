import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../images/fluoride.png';
import cavity from '../../images/cavity.png';
import whitening from '../../images/whitening.png';


const services = [
    {
        name:'Fluoride Tretment',
        description:"hello i am tina.i am a student.my dream is full stack devloper.but its very deficult for me because i am slowlearner",
        img:fluoride
    },

    {
        name:'Cavity Felling',
        description:"hello i am tina.i am a student.my dream is full stack devloper.but its very deficult for me because i am slowlearner",
        img: cavity
    },

   
    {
        name:'Whitening Treet',
        description:"hello i am tina.i am a student.my dream is full stack devloper.but its very deficult for me because i am slowlearner",
        img: whitening
    }


]

const Services = () => {
    return (
        
            <Box sx={{ flexGrow: 1 }}>
                
                <Container>
                <Typography sx={{fontWeight:500, m:3 , color:'cyan'}} variant="h5" component="h5">
            OUE SERVICE
        </Typography>

        <Typography sx={{fontWeight:700, m: 2 , color:'gray'}} variant="h2" component="h5">
            Services We Provide
        </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        
                        
                    {
                        services.map(service => 
                           <Service
                           key={service.name}
                           service={service}
                           
                           ></Service> )
                    }    
                       
                 </Grid>
                </Container>
                    
                </Box>
        
        
    );
};

export default Services;