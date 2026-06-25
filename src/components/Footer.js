import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from '@mui/material';
import {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  Phone,
  Email,
  LocationOn,
} from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#061c2e',
        color: '#aaa',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ color: 'white', mb: 2, fontWeight: 'bold' }}>
              W. Apparels Ltd.
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Leading garment manufacturer in Bangladesh with over 32 years of experience in the readymade garments industry.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton size="small" sx={{ color: '#aaa', '&:hover': { color: 'white' } }}>
                <Facebook />
              </IconButton>
              <IconButton size="small" sx={{ color: '#aaa', '&:hover': { color: 'white' } }}>
                <Twitter />
              </IconButton>
              <IconButton size="small" sx={{ color: '#aaa', '&:hover': { color: 'white' } }}>
                <LinkedIn />
              </IconButton>
              <IconButton size="small" sx={{ color: '#aaa', '&:hover': { color: 'white' } }}>
                <Instagram />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ color: 'white', mb: 2, fontWeight: 'bold' }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="#home" color="inherit" underline="hover">
                Home
              </Link>
              <Link href="#about" color="inherit" underline="hover">
                About Us
              </Link>
              <Link href="#services" color="inherit" underline="hover">
                Services
              </Link>
              <Link href="#contact" color="inherit" underline="hover">
                Contact
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ color: 'white', mb: 2, fontWeight: 'bold' }}>
              Contact Info
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Phone fontSize="small" />
                <Typography variant="body2">+8801853340765</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Phone fontSize="small" />
                <Typography variant="body2">+8801819274335</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Email fontSize="small" />
                <Typography variant="body2">info@wapparels.com</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOn fontSize="small" />
                <Typography variant="body2">
                  295/1A/4 Rayer Bazar, Dhaka-1200, Bangladesh
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3, borderColor: 'rgba(255,255,255,0.1)' }} />

        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} W. Apparels Ltd. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;