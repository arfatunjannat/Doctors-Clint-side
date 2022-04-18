import { Container, Grid } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id:1,
        name:'Cavity Protection',
        time:'11.00 AM - 12.00 PM',
        space:"5 space availbale",

    },
    {
        id:2,
        name:'Cavity Protection',
        time:'11.00 AM - 12.00 PM',
        space:'5 space availbale',

    },
    {
        id:3,
        name:'Cavity Protection',
        time:'11.00 AM - 12.00 PM',
        space:'5 space availbale',

    },
    {
        id:4,
        name:'Cavity Protection',
        time:'11.00 AM - 12.00 PM',
        space: '5 space availbale',

    },
    {
        id:5,
        name:'Cavity Protection',
        time:'11.00 AM - 12.00 PM',
        space: '5 space availbale',

    },
    {
        id:6,
        name:'Cavity ',
        time:'11.00 AM - 1.00 PM',
        space:'5 space availbale',

    }


]
const AppointmentAvaible = ({ date }) => {
    return (
        <Container>
            <h2 sx={{fontWeight:600, m: 2 , color:'cyan'}} variant="h6" component="h5">Avaiable Appointment{date.toDateString()}</h2>
            <Grid container spacing={2}>
            {
                bookings.map(booking => <Booking
                key={booking.id}
                booking={booking}
                date={date}
                ></Booking>)
            }
            </Grid>
        </Container>
    );
};

export default AppointmentAvaible;