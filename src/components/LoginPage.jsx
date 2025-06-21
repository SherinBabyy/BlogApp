import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  TextField,
  Typography
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';


const LoginPage = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
  };

  return (
    <Box className="login-root">
      <Box className="login-text-container">
       <Typography variant="h3" className="login-heading" align='center' fontWeight="bold" gutterBottom sx={{
    fontFamily: '"Playfair Display", serif',
    fontWeight: 'bold',
    color: '#333',
    mb: 1
  }} >Login</Typography>
        <Typography variant="body2" className="login-subtext" 
>Explore delicious stories and flavors from every corner of the world.
        </Typography>
        </Box>  <br /><br />  
      <Paper elevation={6} className="login-card">
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            variant="outlined"
            placeholder=" Email Address"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            InputProps={{
             startAdornment: (
             <Box sx={{ display: 'flex', alignItems: 'center', pl: 1 }}>
             <EmailIcon sx={{ color: '#bbb', mr: 1 }} />
             </Box>
              )
              }}/>

             
          
          <TextField
            fullWidth
            margin="normal"
            variant="outlined"
            type="password"
            placeholder="Password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            InputProps={{
              startAdornment: <LockIcon sx={{ color: '#bbb', mr: 1 }} />
            }}
          />
          <Box display="flex" justifyContent="space-between" alignItems="center">
          <FormControlLabel control={<Checkbox />} label="Remember me" />
          <Link href="#" underline="hover">Forgot Password?</Link>
        </Box>
          
         

          <br /><Button type="submit" fullWidth variant="contained" className="login-button">
            LOGIN
          </Button>
        </form>
      <Box display="flex" alignItems="center" my={2}>
         <Divider sx={{ flex: 2 }} />
         <Typography sx={{ mx: 2, color: '#999', }}>or</Typography>
          <Divider sx={{ flex: 1 }} />
          <Divider sx={{ flex: 1, borderColor: '#ccc' }} />

          </Box>
        <Typography className="social-text">Sign in with</Typography>
        <Box className="social-icons">
          <FacebookIcon sx={{ color: '#3b5998' }} />
          <GoogleIcon sx={{ color: '#db4437' }} />
          <TwitterIcon sx={{ color: '#1da1f2' }} />
        </Box>
         
        <Grid container justifyContent="center" sx={{ mt: 2 }}>
           <Typography variant="body2" sx={{ textAlign: 'center' }}>
          Don't have an account?&nbsp;
    
         <Link href="#" underline="hover">Sign Up</Link></Typography>
        </Grid>
      </Paper>
    </Box>
  );
};

export default LoginPage;
