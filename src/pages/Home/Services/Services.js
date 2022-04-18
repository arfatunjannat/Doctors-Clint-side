import React from 'react';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';


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

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        
                        
                    {
                        services.map(service => <Service/> )
                    }    
                       
                 </Grid>
                </Container>
                    
                </Box>
        
        
    );
};

export default Services;