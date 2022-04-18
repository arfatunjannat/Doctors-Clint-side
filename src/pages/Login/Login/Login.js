import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import login from '../../../images/login.png';
const Login = () => {
    const [loginData,setLoginData]=useState({});

    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        console.log(field,value);
        const newLoginData = {...loginData};
        newLoginData[field]= value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e =>{
        alert('hi')
        e.preventDefault()
    }
    return (
        <Container>
           
           <Grid container spacing={2}>
           <Grid item  xs={12} md={6}>

           
           <Typography style={{margin:'50px',padding:'25px'}} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Login
          </Typography>

          <form onSubmit={handleLoginSubmit}>
          
          <TextField style={{width:'75%'}} id="standard-basic" label="your email" 
          name='email'
         onChange ={handleOnChange}
          type="text"
          variant="standard" />

          <TextField style={{width:'75%'}} id="standard-basic" label="your password" 
          type="password"
          name='password'
         onChange ={handleOnChange}
          variant="standard" />

            <TextField style={{width:'75%'}} id="standard-basic"
             label="Re-type password" 
          type=" password"
          name="password"
          
         onChange ={handleOnChange}
          variant="standard" />


            <br />
          
          <Button sx={{width:'75%', m:1}} type="submit" variant="contained">Login</Button>
          <NavLink
          style={{textDecoration:'none'}}
          to="/register">

              <Button variant="text">New use?Please Login</Button>
          </NavLink>
           </form>

           </Grid>
           <Grid item  xs={12} md={6}>
               <img sx={{width:'100%'}}  src={login} alt="" />
           </Grid>
           </Grid>
        </Container>
    );
};

export default Login;