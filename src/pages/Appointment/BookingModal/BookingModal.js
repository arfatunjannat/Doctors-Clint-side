import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const style = {
    position: 'absolute' ,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
  };
  

  
const BookingModal = ({openBooking,handleBookingClose,booking,date}) => {
  const {name,time,space}= booking;

  const handleBookingSubmit = e => {
    alert('submitting');
    //collect data
    //send to the server
    handleBookingClose();
    e.preventDefault();

  }
    return (
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openBooking}
        onClose={handleBookingClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openBooking}>
          <Box sx={style}>
            
          <Typography sx={{fontWeight:400, m: 2 , color:'cyan'}} variant="h5" component="h6">
            {name}
        </Typography>
            

            <form onSubmit={handleBookingSubmit}>
            <TextField 
            sx={{width: '90%',m:1
            }} id ='outlined-size-small'
            defaultValue={time} 
            size='small'
             />

            <TextField 
            sx={{width: '90%',m:1
            }} id ='outlined-size-small'
            defaultValue='your-name'
            size='small' 
             />
              <TextField 
            sx={{width: '90%',m:1
            }} id ='outlined-size-small'
            defaultValue='your-email' 
            size='small'
             />

          <TextField 
            sx={{width: '90%',m:1
            }} id ='outlined-size-small'
            defaultValue='your-phone' 
            size='small'
             />

        <TextField 
        disabled
            sx={{width: '90%',m:1
            }} id ='outlined-size-small'
            defaultValue={date.toDateString()} 
            size='small'
             /> 
              
            </form>
            <Button onClick={handleBookingSubmit} type="submit" variant="contained">Booking</Button>
            
          </Box>
        </Fade>
      </Modal>
    );
};

export default BookingModal;