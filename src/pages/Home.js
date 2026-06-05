// pages/Home.js
import { useState, useEffect } from 'react';
import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
  Paper,
  Avatar,
  Chip,
  useMediaQuery,
  alpha,
  Fade,
  Slide,
  IconButton,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import { keyframes } from '@emotion/react';
import ServicesSection from '../components/ServicesSection';
import EnhancedSections from '../components/EnhancedSections';

// Keyframe animation for floating effect
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [stats, setStats] = useState({ projects: 0, clients: 0, experience: 0 });

  const testimonials = [
    {
      name: 'Sadman Rafid',
      role: 'Homeowner',
      content: 'VersaBuild transformed our outdated home into a modern living space. Their attention to detail and professionalism exceeded our expectations.',
      avatar: 'https://i.ibb.co.com/23T3cFZW/sadman.jpg',
    },
    {
      name: 'Saif Al Siam',
      role: 'Business Owner',
      content: 'We hired VersaBuild for our office expansion project. They delivered on time and within budget while maintaining the highest quality standards.',
      avatar: 'https://i.ibb.co.com/fb9N3db/Saif-Al-Siam.jpg',
    },
    {
      name: 'Jahidul Hasan',
      role: 'Property Developer',
      content: 'I\'ve worked with many construction firms, but VersaBuild stands out for their innovative solutions and commitment to excellence.',
      avatar: 'https://i.ibb.co.com/yBP2YPbF/Jahidul-Hasan.jpg',
    },
  ];

  const statsData = {
    projects: 350,
    clients: 240,
    experience: 15,
  };

  // Animate statistics counting up
  useEffect(() => {
    const duration = 2000; // Animation duration in ms
    const steps = 60; // Number of steps
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step += 1;
      setStats({
        projects: Math.min(statsData.projects, Math.floor((statsData.projects * step) / steps)),
        clients: Math.min(statsData.clients, Math.floor((statsData.clients * step) / steps)),
        experience: Math.min(statsData.experience, Math.floor((statsData.experience * step) / steps)),
      });

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Box sx={{ overflow: 'hidden' }}>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          background: `linear-gradient(to bottom, ${alpha(theme.palette.primary.dark, 0.8)}, ${alpha(theme.palette.secondary.dark, 0.8)}), url(https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          color: 'white',
          py: 8,
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Fade in timeout={1000}>
                <Box>
                  <Chip 
                    icon={<CheckCircleIcon />} 
                    label="15 Years of Excellence" 
                    sx={{ 
                      bgcolor: alpha(theme.palette.common.white, 0.2), 
                      color: 'white', 
                      mb: 3,
                      backdropFilter: 'blur(10px)'
                    }} 
                  />
                  <Typography
                    component="h1"
                    variant={isMobile ? "h3" : "h2"}
                    fontWeight="bold"
                    gutterBottom
                  >
                    Building Dreams with Precision & Quality
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                    From concept to completion, we deliver exceptional construction services with over 15 years of expertise in residential and commercial projects.
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 4 }}>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="large"
                      component={Link}
                      to="/contact"
                      endIcon={<EastIcon />}
                      sx={{ 
                        px: 4, 
                        py: 1.5,
                        borderRadius: 2,
                        boxShadow: `0 8px 16px ${alpha(theme.palette.secondary.main, 0.3)}`,
                        '&:hover': {
                          boxShadow: `0 12px 20px ${alpha(theme.palette.secondary.main, 0.4)}`,
                        }
                      }}
                    >
                      Get a Quote
                    </Button>
                    <Button
                      variant="outlined"
                      color="inherit"
                      size="large"
                      component={Link}
                      to="/projects"
                      sx={{ 
                        px: 4, 
                        py: 1.5,
                        borderRadius: 2,
                        borderWidth: 2,
                        '&:hover': {
                          borderWidth: 2,
                          bgcolor: alpha(theme.palette.common.white, 0.1)
                        }
                      }}
                    >
                      View Our Work
                    </Button>
                  </Box>
                </Box>
              </Fade>
            </Grid>
            {!isMobile && (
              <Grid item xs={12} md={6}>
                <Slide direction="up" in timeout={1000}>
                  <Box 
                    sx={{ 
                      animation: `${float} 4s ease-in-out infinite`,
                      position: 'relative'
                    }}
                  >
                    <Box
                      component="img"
                      src="https://i.ibb.co.com/QhDSx7W/Whats-App-Image-2025-12-07-at-23-43-04-941feae7.jpg"
                      alt="Construction"
                      sx={{
                        width: '100%',
                        borderRadius: 4,
                        boxShadow: `0 24px 48px ${alpha(theme.palette.common.black, 0.4)}`,
                      }}
                    />
                    <Paper 
                      elevation={8} 
                      sx={{ 
                        position: 'absolute', 
                        bottom: -40, 
                        left: -40, 
                        p: 2, 
                        borderRadius: 3,
                        backdropFilter: 'blur(10px)',
                        bgcolor: alpha(theme.palette.common.white, 0.1),
                        border: `1px solid ${alpha(theme.palette.common.white, 0.2)}`
                      }}
                    >
                      <Typography variant="h4" fontWeight="bold" color="white">
                        {stats.projects}+
                      </Typography>
                      <Typography variant="body2" color="white">
                        Projects Completed
                      </Typography>
                    </Paper>
                  </Box>
                </Slide>
              </Grid>
            )}
          </Grid>
        </Container>
      </Box>

        {/* Services Section */}
        <ServicesSection />


      {/* Stats Section */}
      <EnhancedSections />

      {/* Testimonials Section */}
      {/* <Box sx={{ bgcolor: 'grey.50', py: 10 }}>
        <Container>
          <Box textAlign="center" sx={{ mb: 6 }}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              What Our Clients Say
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Don't just take our word for it - hear from our satisfied clients
            </Typography>
          </Box>
          
          <Box sx={{ position: 'relative', maxWidth: 800, mx: 'auto', mt: 8 }}>
            <Paper 
              elevation={8} 
              sx={{ 
                p: 4, 
                borderRadius: 4,
                position: 'relative'
              }}
            >
              <FormatQuoteIcon 
                sx={{ 
                  position: 'absolute', 
                  top: 20, 
                  left: 20, 
                  fontSize: 60, 
                  color: alpha(theme.palette.primary.main, 0.1),
                  transform: 'rotate(180deg)'
                }} 
              />
              <Box textAlign="center">
                <Typography variant="body1" paragraph sx={{ fontStyle: 'italic', fontSize: '1.1rem' }}>
                  "{testimonials[currentTestimonial].content}"
                </Typography>
                <Avatar 
                  src={testimonials[currentTestimonial].avatar} 
                  sx={{ width: 70, height: 70, mx: 'auto', mb: 2 }}
                />
                <Typography variant="h6" fontWeight="bold">
                  {testimonials[currentTestimonial].name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {testimonials[currentTestimonial].role}
                </Typography>
              </Box>
              <FormatQuoteIcon 
                sx={{ 
                  position: 'absolute', 
                  bottom: 20, 
                  right: 20, 
                  fontSize: 60, 
                  color: alpha(theme.palette.primary.main, 0.1)
                }} 
              />
            </Paper>
            
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, gap: 1 }}>
              <IconButton onClick={prevTestimonial} color="primary">
                <WestIcon />
              </IconButton>
              <IconButton onClick={nextTestimonial} color="primary">
                <EastIcon />
              </IconButton>
            </Box>
            
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              {testimonials.map((_, index) => (
                <Box 
                  key={index} 
                  onClick={() => setCurrentTestimonial(index)}
                  sx={{ 
                    width: 10, 
                    height: 10, 
                    borderRadius: '50%', 
                    bgcolor: currentTestimonial === index ? 'primary.main' : 'grey.400',
                    mx: 0.5,
                    cursor: 'pointer'
                  }} 
                />
              ))}
            </Box>
          </Box>
        </Container>
      </Box> */}

      
    </Box>
  );
};

export default Home;