import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Paper,
  Chip,
  Divider,
} from '@mui/material';
import {
  Factory,
  Assignment,
  Security,
  Build,
  TrendingUp,
  LocalShipping,
  CheckCircle,
  ArrowForward,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: <Assignment sx={{ fontSize: 60, color: '#0a2b4a' }} />,
      title: 'Fabric Inspection',
      description: 'Thorough inspection of raw materials to ensure highest quality standards before production begins.',
      features: ['Quality Control', 'Material Testing', 'Defect Detection'],
    },
    {
      icon: <Build sx={{ fontSize: 60, color: '#0a2b4a' }} />,
      title: 'Cutting',
      description: 'Precision cutting services using advanced machinery for accurate fabric cutting and pattern making.',
      features: ['CAD Pattern Making', 'Automated Cutting', 'Minimal Waste'],
    },
    {
      icon: <Factory sx={{ fontSize: 60, color: '#0a2b4a' }} />,
      title: 'Sewing',
      description: 'Expert sewing and assembly services with skilled machinists ensuring high-quality garment construction.',
      features: ['Skilled Machinists', 'Quality Stitching', 'Assembly Line'],
    },
    {
      icon: <Security sx={{ fontSize: 60, color: '#0a2b4a' }} />,
      title: 'Quality Assurance',
      description: 'Comprehensive quality assurance processes to ensure every product meets international standards.',
      features: ['ISO Standards', 'Random Testing', 'Final Inspection'],
    },
    {
      icon: <TrendingUp sx={{ fontSize: 60, color: '#0a2b4a' }} />,
      title: 'Sustainability & Development',
      description: 'Commitment to sustainable manufacturing practices and continuous development in garment production.',
      features: ['Eco-friendly Practices', 'Waste Management', 'Energy Efficiency'],
    },
    {
      icon: <LocalShipping sx={{ fontSize: 60, color: '#0a2b4a' }} />,
      title: 'Packaging & Logistics',
      description: 'Professional packaging and efficient logistics solutions for timely delivery to international markets.',
      features: ['Secure Packaging', 'Export Documentation', 'Timely Delivery'],
    },
  ];

  const benefits = [
    '30+ Years of Experience',
    'Best Quality Products',
    'Maintain Consistency',
    'Skilled Workforce',
    'Modern Machinery',
    'International Standards',
  ];

  return (
    <Box>
      {/* Hero */}
      <Box sx={{ backgroundColor: '#0a2b4a', color: 'white', py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Our Services
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9 }}>
            Comprehensive garment manufacturing solutions
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Introduction */}
        <Paper elevation={2} sx={{ p: 4, mb: 6 }}>
          <Typography variant="h4" gutterBottom fontWeight="bold" color="#0a2b4a">
            Complete Garment Manufacturing Solutions
          </Typography>
          <Typography variant="body1" paragraph>
            At W. Apparels Ltd., we offer end-to-end garment manufacturing services from fabric
            inspection to final packaging. Our comprehensive approach ensures quality at every
            stage of production.
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
            {benefits.map((benefit, index) => (
              <Chip key={index} icon={<CheckCircle />} label={benefit} color="primary" />
            ))}
          </Box>
        </Paper>

        {/* Services Grid */}
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card sx={{ height: '100%', '&:hover': { boxShadow: 6, transform: 'translateY(-4px)', transition: 'all 0.3s' } }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    {service.icon}
                    <Typography variant="h5" fontWeight="bold" color="#0a2b4a">
                      {service.title}
                    </Typography>
                  </Box>
                  <Typography variant="body1" paragraph color="textSecondary">
                    {service.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {service.features.map((feature, idx) => (
                      <Chip key={idx} label={feature} size="small" variant="outlined" />
                    ))}
                  </Box>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button
                    component={Link}
                    to="/contact"
                    size="small"
                    color="primary"
                    endIcon={<ArrowForward />}
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Facilities & Accreditation */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" gutterBottom fontWeight="bold" color="#0a2b4a" align="center">
            Facilities & Accreditation
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom fontWeight="bold" color="#0a2b4a">
                  Our Facilities
                </Typography>
                <Grid container spacing={2}>
                  {['Fire Training', 'Safety Equipment', 'Modern Machinery', 'Quality Lab'].map((item, index) => (
                    <Grid item xs={6} key={index}>
                      <Chip
                        icon={<Security />}
                        label={item}
                        variant="outlined"
                        sx={{ width: '100%', py: 1.5 }}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom fontWeight="bold" color="#0a2b4a">
                  Accreditations
                </Typography>
                <Grid container spacing={2}>
                  {['Quality Assurance', 'ISO Certified', 'BGMEA Member', 'Export License'].map((item, index) => (
                    <Grid item xs={6} key={index}>
                      <Chip
                        icon={<CheckCircle />}
                        label={item}
                        color="primary"
                        sx={{ width: '100%', py: 1.5 }}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* CTA */}
        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Paper sx={{ p: 4, backgroundColor: '#e3f2fd' }}>
            <Typography variant="h5" gutterBottom fontWeight="bold" color="#0a2b4a">
              Ready to Start Your Project?
            </Typography>
            <Typography variant="body1" paragraph color="textSecondary">
              Contact us today for a consultation and quote.
            </Typography>
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              color="primary"
              size="large"
              endIcon={<ArrowForward />}
            >
              Get a Quote
            </Button>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;