import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  TextField,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Snackbar,
  Alert,
} from '@mui/material';
import {
  Phone,
  Email,
  LocationOn,
  Send,
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
} from '@mui/icons-material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setSnackbar({
      open: true,
      message: 'Thank you! We will get back to you soon.',
      severity: 'success',
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box>
      {/* Hero */}
      <Box sx={{ backgroundColor: '#0a2b4a', color: 'white', py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9 }}>
            Get in touch with our team
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid item xs={12} md={5}>
            <Paper elevation={3} sx={{ p: 4, backgroundColor: '#0a2b4a', color: 'white', height: '100%' }}>
              <Typography variant="h5" gutterBottom fontWeight="bold">
                Get in Touch
              </Typography>
              <Typography variant="body2" sx={{ mb: 3, opacity: 0.8 }}>
                We'd love to hear from you. Please reach out to us through any of the following channels.
              </Typography>

              <List>
                <ListItem>
                  <ListItemIcon>
                    <Phone sx={{ color: 'white' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Phone"
                    secondary="+8801853340765"
                    secondaryTypographyProps={{ style: { color: '#aaa' } }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Phone sx={{ color: 'white' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Phone (Alternative)"
                    secondary="+8801819274335"
                    secondaryTypographyProps={{ style: { color: '#aaa' } }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Email sx={{ color: 'white' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Email"
                    secondary="info@wapparels.com"
                    secondaryTypographyProps={{ style: { color: '#aaa' } }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LocationOn sx={{ color: 'white' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Address"
                    secondary="295/1A/4 Rayer Bazar, Dhaka-1200, Bangladesh"
                    secondaryTypographyProps={{ style: { color: '#aaa' } }}
                  />
                </ListItem>
              </List>

              <Divider sx={{ my: 2, borderColor: 'rgba(255,255,255,0.1)' }} />

              <Typography variant="h6" gutterBottom>
                Follow Us
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  variant="outlined"
                  sx={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)', minWidth: 0, p: 1 }}
                >
                  <Facebook />
                </Button>
                <Button
                  variant="outlined"
                  sx={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)', minWidth: 0, p: 1 }}
                >
                  <Twitter />
                </Button>
                <Button
                  variant="outlined"
                  sx={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)', minWidth: 0, p: 1 }}
                >
                  <LinkedIn />
                </Button>
                <Button
                  variant="outlined"
                  sx={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)', minWidth: 0, p: 1 }}
                >
                  <Instagram />
                </Button>
              </Box>
            </Paper>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom fontWeight="bold" color="#0a2b4a">
                Send a Message
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
                Fill out the form below and we'll get back to you as soon as possible.
              </Typography>

              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      placeholder="Your full name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      placeholder="your.email@example.com"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      placeholder="Subject of your message"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      multiline
                      rows={6}
                      variant="outlined"
                      placeholder="Write your message here..."
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                      endIcon={<Send />}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        {/* Map Section */}
        <Paper elevation={3} sx={{ mt: 4, p: 2, overflow: 'hidden' }}>
          <Typography variant="h6" gutterBottom fontWeight="bold" color="#0a2b4a">
            Find Us
          </Typography>
          <Box
            sx={{
              height: 300,
              backgroundColor: '#e8edf3',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 1,
            }}
          >
            <Typography variant="body1" color="textSecondary">
              📍 295/1A/4 Rayer Bazar, Dhaka-1200, Bangladesh
            </Typography>
            {/* You can embed Google Maps here */}
          </Box>
        </Paper>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;