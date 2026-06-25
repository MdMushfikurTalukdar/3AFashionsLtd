import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Paper,
} from '@mui/material';
import { Link } from 'react-router-dom';

const Projects = () => {
  // This is a placeholder for future projects page
  return (
    <Box>
      <Box sx={{ backgroundColor: '#0a2b4a', color: 'white', py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Our Projects
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9 }}>
            Showcasing our work and achievements
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Paper elevation={2} sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom color="#0a2b4a">
            Coming Soon
          </Typography>
          <Typography variant="body1" paragraph>
            Our projects page is currently under development.
          </Typography>
          <Button component={Link} to="/contact" variant="contained" color="primary">
            Contact Us
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default Projects;