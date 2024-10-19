import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography, Box, Container } from '@mui/material';
import { styled } from '@mui/system';

// Custom styled button
const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  padding: theme.spacing(1, 4),
}));

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogin = (role) => {
    if (role === 'admin') {
      navigate('/admin');
    } else if (role === 'user') {
      navigate('/user');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Client Care 2.0
        </Typography>
        <Box sx={{ mt: 4 }}>
          <StyledButton
            variant="contained"
            color="primary"
            onClick={() => handleLogin('admin')}
          >
            Admin Login
          </StyledButton>
          <StyledButton
            variant="contained"
            color="secondary"
            onClick={() => handleLogin('user')}
          >
            User Login
          </StyledButton>
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage;