import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  TextField,
  Typography
} from '@mui/material';

const SignupPage = () => {
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSignupData({
      ...signupData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupData);
  };

  return (
    <Box className="login-root">
      <Box className="login-header">
      <Typography variant="h4" className="login-heading">Create Account</Typography>
      <Typography variant="body2" className="login-subtext">
        Join thousands of food lovers and explore recipes made with love!
      </Typography>
      </Box>
      <Paper elevation={6} className="login-card">
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            variant="outlined"
            placeholder="Full Name"
            name="name"
            value={signupData.name}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            variant="outlined"
            placeholder="Email Address"
            name="email"
            value={signupData.email}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            variant="outlined"
            placeholder="Password"
            name="password"
            type="password"
            value={signupData.password}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            variant="outlined"
            placeholder="Confirm Password"
            name="confirmPassword"
            type="password"
            value={signupData.confirmPassword}
            onChange={handleChange}
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={signupData.terms}
                onChange={handleChange}
                name="terms"
                 sx={{
        transform: 'scale(0.8)', // Shrinks the checkbox
        padding: '4px' // Optional: reduce padding around checkbox
      }}
                
              />
            }
            label="I agree to the Terms & Conditions"
             sx={{ '& .MuiFormControlLabel-label': { fontSize: '0.8rem' } }}
          />
         <br />
          <br /><Button type="submit" fullWidth variant="contained" className="login-button">
            SIGN UP
          </Button>
        </form>

        
      </Paper>
      <Box sx={{ textAlign: 'center', marginTop: '1.5rem' }}>
  <Typography className="social-text">
    Already have an account?&nbsp;
    <Link href="/login" underline="hover">Log In</Link>
  </Typography>
    </Box>
    </Box>

  );
};

export default SignupPage;
