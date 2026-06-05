// pages/About.js
import React, { useEffect, useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Paper,
  alpha,
  useTheme,
  Fade,
  Slide,
  Grow,
  Zoom,
  Chip,
  IconButton
} from '@mui/material';
import {
  EmojiEvents,
  Group,
  Schedule,
  Star,
  PlayArrow,
} from '@mui/icons-material';
import { keyframes } from '@emotion/react';
import ValuesSection from '../components/ValuesSection';
import LeadershipTeam from '../components/LeadershipTeam';

// Animation for floating elements
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

// Animation for gradient background
const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const About = () => {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);


  const stats = [
    { number: '250+', label: 'Projects Completed', icon: <EmojiEvents /> },
    { number: '15+', label: 'Years Experience', icon: <Schedule /> },
    { number: '50+', label: 'Team Members', icon: <Group /> },
    { number: '100%', label: 'Client Satisfaction', icon: <Star /> },
  ];

  return (
    <Box sx={{ overflow: 'hidden' }}>
      {/* Hero Section */}
      <Box
        sx={{
          pt: 15,
          pb: 10,
          background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(theme.palette.secondary.main, 0.1)} 100%)`,
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `radial-gradient(${alpha(theme.palette.primary.main, 0.2)} 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
            opacity: 0.3,
            zIndex: 0,
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Fade in={isVisible} timeout={1000}>
            <Box sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
              <Chip 
                label="ABOUT OUR COMPANY" 
                color="primary" 
                variant="outlined"
                sx={{ 
                  mb: 3, 
                  px: 2, 
                  py: 1,
                  fontWeight: 'bold',
                  background: alpha(theme.palette.primary.main, 0.1)
                }} 
              />
              <Typography
                variant="h1"
                fontWeight="bold"
                gutterBottom
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  backgroundClip: 'text',
                  textFillColor: 'transparent',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Building Dreams Into Reality
              </Typography>
              <Typography 
                variant="h6" 
                color="text.secondary" 
                sx={{ 
                  maxWidth: 600, 
                  mx: 'auto', 
                  mt: 3,
                  fontSize: { xs: '1rem', md: '1.25rem' }
                }}
              >
                For over 15 years, VersaBuild Construction has been transforming visions into exceptional spaces that stand the test of time.
              </Typography>
            </Box>
          </Fade>
        </Container>
      </Box>

      {/* Story Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Slide direction="left" in={isVisible} timeout={800}>
              <Box>
                <Typography 
                  variant="h3" 
                  fontWeight="bold" 
                  gutterBottom
                  sx={{
                    position: 'relative',
                    display: 'inline-block',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -10,
                      left: 0,
                      width: 60,
                      height: 4,
                      bgcolor: theme.palette.primary.main,
                      borderRadius: 2
                    }
                  }}
                >
                  Our Story
                </Typography>
                <Typography variant="body1" paragraph sx={{ mt: 3, fontSize: '1.1rem', lineHeight: 1.7 }}>
                  VersaBuild Construction was founded in 2024 with a simple mission: to deliver 
                  exceptional construction services with uncompromising quality and integrity. What 
                  started as a small local contractor has grown into a respected full-service 
                  construction company serving clients across the region.
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
                  Throughout our journey, we've remained committed to our core values of quality, 
                  reliability, and customer satisfaction. Every project we undertake is approached 
                  with the same dedication to excellence that has defined our company from the beginning.
                </Typography>
                
                <Box sx={{ display: 'flex', gap: 2, mt: 4, flexWrap: 'wrap' }}>
                  <Chip icon={<EmojiEvents />} label="Award Winning" variant="outlined" />
                  <Chip icon={<Group />} label="Professional Team" variant="outlined" />
                  <Chip icon={<Star />} label="5-Star Rated" variant="outlined" />
                </Box>
              </Box>
            </Slide>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Zoom in={isVisible} timeout={1000}>
              <Box sx={{ position: 'relative' }}>
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Construction site"
                  sx={{
                    width: '100%',
                    borderRadius: 4,
                    boxShadow: `0 20px 40px ${alpha(theme.palette.common.black, 0.15)}`,
                  }}
                />
                <Paper 
                  elevation={8} 
                  sx={{ 
                    position: 'absolute', 
                    bottom: -20, 
                    right: -20, 
                    p: 3, 
                    borderRadius: 3,
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    color: 'white',
                    animation: `${float} 6s ease-in-out infinite`,
                    display: { xs: 'none', md: 'block' }
                  }}
                >
                  <Typography variant="h4" fontWeight="bold">
                    15+
                  </Typography>
                  <Typography variant="body2">
                    Years of Excellence
                  </Typography>
                </Paper>
                
                {/* Play button overlay */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <IconButton
                    sx={{
                      bgcolor: alpha(theme.palette.common.white, 0.9),
                      width: 80,
                      height: 80,
                      '&:hover': {
                        bgcolor: theme.palette.common.white,
                      }
                    }}
                  >
                    <PlayArrow sx={{ fontSize: 40, color: theme.palette.primary.main }} />
                  </IconButton>
                </Box>
              </Box>
            </Zoom>
          </Grid>
        </Grid>
      </Container>

      {/* Stats Section */}
      <Box sx={{ 
        py: 10,
        background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`,
        backgroundSize: '200% 200%',
        animation: `${gradient} 8s ease infinite`,
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Grow in={isVisible} timeout={1000} style={{ transitionDelay: `${index * 200}ms` }}>
                  <Box sx={{ textAlign: 'center', p: 3 }}>
                    <Box sx={{ 
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      bgcolor: alpha(theme.palette.common.white, 0.2),
                      mb: 2,
                      animation: `${float} 4s ease-in-out infinite`,
                      animationDelay: `${index * 0.5}s`,
                    }}>
                      {React.cloneElement(stat.icon, { sx: { fontSize: 40 } })}
                    </Box>
                    <Typography 
                      variant="h2" 
                      fontWeight="bold" 
                      gutterBottom
                      sx={{ 
                        background: `linear-gradient(45deg, ${theme.palette.common.white}, ${theme.palette.secondary.light})`,
                        backgroundClip: 'text',
                        textFillColor: 'transparent',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {stat.number}
                    </Typography>
                    <Typography variant="h6" sx={{ opacity: 0.9 }}>
                      {stat.label}
                    </Typography>
                  </Box>
                </Grow>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Values Section */}
      <ValuesSection />

      {/* Team Section */}
      <LeadershipTeam />
          
          
    </Box>
  );
};

export default About;