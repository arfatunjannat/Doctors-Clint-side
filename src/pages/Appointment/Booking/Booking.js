import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import BookingModal from '../BookingModal/BookingModal';


const Booking = ({ booking,date }) => {
    const {name,time,space}= booking;
    const [openBooking, setBookingOpen] = React.useState(false);
  const handleBookingOpen = () => setBookingOpen(true);
  const handleBookingClose = () => setBookingOpen(false);
    return (
        <>
        <Grid items xs= {12} sm={6} md={4}>
            <Paper elevation={3} sx={{py: 3, m:4}} >
            
            <Typography sx={{fontWeight:600, m: 2 , color:'cyan'}} variant="h6" component="h5">
            {name}
        </Typography>
        <Typography sx={{fontWeight:400, m: 2 , color:'gray'}} variant="h6" component="h6">
            {time}
        </Typography>
        <Typography sx={{fontWeight:300, m: 2 , color:'gray'}} variant="h6" component="h6">
            {space}
        </Typography>
        <Button onClick={handleBookingOpen} variant="contained" style={{backgroundColor: '#5CE7ED', margin:'30px',pading:'7px'}}>
        GET APPOINTMENT
      </Button>
             </Paper >
            </Grid>
            <BookingModal
            date={date}
            booking={booking}
            handleBookingClose={handleBookingClose}
            openBooking={openBooking}
            ></BookingModal>
            </>
            
    );
};

export default Booking;
