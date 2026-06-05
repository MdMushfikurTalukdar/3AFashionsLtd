import { useEffect, useRef, useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Paper,
  alpha,
  useTheme,
  useMediaQuery,
  Fade,
  Slide,
  Grow,
  Card,
  Avatar,
  Chip
} from '@mui/material';
import {
  CheckCircle as CheckCircleIcon,
  East as EastIcon,
  PlayCircleOutline as PlayIcon,
  EmojiEvents as TrophyIcon,
  Groups as TeamIcon,
  Engineering as ToolsIcon
} from '@mui/icons-material';
import { keyframes } from '@emotion/react';

// Animation for counter
const countAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Animation for floating elements
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

// Pulse animation for background elements
const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.7; }
  50% { transform: scale(1.05); opacity: 0.8; }
  100% { transform: scale(1); opacity: 0.7; }
`;

const EnhancedSections = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [stats, setStats] = useState({ projects: 0, clients: 0, experience: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const statsData = {
    projects: 350,
    clients: 240,
    experience: 15,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Animate statistics counting up
          const duration = 2000;
          const steps = 60;
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
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Statistics Section */}
      <Box 
        ref={sectionRef}
        sx={{ 
          py: 10,
          position: 'relative',
          overflow: 'hidden',
          background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`,
          color: 'white',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `radial-gradient(circle at 20% 80%, ${alpha(theme.palette.primary.light, 0.2)} 0%, transparent 40%),
                              radial-gradient(circle at 80% 20%, ${alpha(theme.palette.secondary.light, 0.2)} 0%, transparent 40%)`,
            zIndex: 0,
          }
        }}
      >
        <Container sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={4}>
              <Fade in={isVisible} timeout={1000}>
                <Box sx={{ 
                  textAlign: 'center',
                  p: 3,
                  borderRadius: 4,
                  background: alpha(theme.palette.common.white, 0.1),
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${alpha(theme.palette.common.white, 0.2)}`,
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  animation: `${float} 6s ease-in-out infinite`,
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: `0 12px 28px ${alpha(theme.palette.common.black, 0.3)}`,
                  }
                }}>
                  <Box sx={{ 
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    bgcolor: alpha(theme.palette.common.white, 0.2),
                    mb: 2,
                  }}>
                    <TrophyIcon sx={{ fontSize: 40 }} />
                  </Box>
                  <Typography 
                    variant="h2" 
                    fontWeight="bold" 
                    gutterBottom
                    sx={{ 
                      animation: `${countAnimation} 1s ease-out`,
                      background: `linear-gradient(45deg, ${theme.palette.common.white}, ${theme.palette.secondary.light})`,
                      backgroundClip: 'text',
                      textFillColor: 'transparent',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {stats.projects}+
                  </Typography>
                  <Typography variant="h6" sx={{ opacity: 0.9 }}>
                    Projects Completed
                  </Typography>
                </Box>
              </Fade>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Fade in={isVisible} timeout={1000} style={{ transitionDelay: '300ms' }}>
                <Box sx={{ 
                  textAlign: 'center',
                  p: 3,
                  borderRadius: 4,
                  background: alpha(theme.palette.common.white, 0.1),
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${alpha(theme.palette.common.white, 0.2)}`,
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  animation: `${float} 6s ease-in-out infinite`,
                  animationDelay: '1s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: `0 12px 28px ${alpha(theme.palette.common.black, 0.3)}`,
                  }
                }}>
                  <Box sx={{ 
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    bgcolor: alpha(theme.palette.common.white, 0.2),
                    mb: 2,
                  }}>
                    <TeamIcon sx={{ fontSize: 40 }} />
                  </Box>
                  <Typography 
                    variant="h2" 
                    fontWeight="bold" 
                    gutterBottom
                    sx={{ 
                      animation: `${countAnimation} 1s ease-out`,
                      animationDelay: '0.3s',
                      background: `linear-gradient(45deg, ${theme.palette.common.white}, ${theme.palette.secondary.light})`,
                      backgroundClip: 'text',
                      textFillColor: 'transparent',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {stats.clients}+
                  </Typography>
                  <Typography variant="h6" sx={{ opacity: 0.9 }}>
                    Satisfied Clients
                  </Typography>
                </Box>
              </Fade>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Fade in={isVisible} timeout={1000} style={{ transitionDelay: '600ms' }}>
                <Box sx={{ 
                  textAlign: 'center',
                  p: 3,
                  borderRadius: 4,
                  background: alpha(theme.palette.common.white, 0.1),
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${alpha(theme.palette.common.white, 0.2)}`,
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  animation: `${float} 6s ease-in-out infinite`,
                  animationDelay: '2s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: `0 12px 28px ${alpha(theme.palette.common.black, 0.3)}`,
                  }
                }}>
                  <Box sx={{ 
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    bgcolor: alpha(theme.palette.common.white, 0.2),
                    mb: 2,
                  }}>
                    <ToolsIcon sx={{ fontSize: 40 }} />
                  </Box>
                  <Typography 
                    variant="h2" 
                    fontWeight="bold" 
                    gutterBottom
                    sx={{ 
                      animation: `${countAnimation} 1s ease-out`,
                      animationDelay: '0.6s',
                      background: `linear-gradient(45deg, ${theme.palette.common.white}, ${theme.palette.secondary.light})`,
                      backgroundClip: 'text',
                      textFillColor: 'transparent',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {stats.experience}+
                  </Typography>
                  <Typography variant="h6" sx={{ opacity: 0.9 }}>
                    Years of Experience
                  </Typography>
                </Box>
              </Fade>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* About Section */}
      <Container sx={{ py: 10 }}>
        <Grid container spacing={6} alignItems="center" direction={isMobile ? 'column-reverse' : 'row'}>
          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative' }}>
              <Slide direction="right" in={true} timeout={800}>
                <Box
                  component="img"
                  src="https://i.ibb.co.com/8DhrjF6T/building2.jpg"
                  alt="Construction team"
                  sx={{
                    width: '100%',
                    borderRadius: 4,
                    boxShadow: `0 16px 32px ${alpha(theme.palette.common.black, 0.1)}`,
                  }}
                />
              </Slide>
              
              <Paper 
                elevation={8} 
                sx={{ 
                  position: 'absolute', 
                  bottom: -30, 
                  right: -30, 
                  p: 3, 
                  borderRadius: 3,
                  bgcolor: theme.palette.common.white,
                  boxShadow: `0 16px 32px ${alpha(theme.palette.common.black, 0.1)}`,
                  display: { xs: 'none', md: 'block' },
                  animation: `${pulse} 4s ease-in-out infinite`,
                }}
              >
                <Typography variant="h4" fontWeight="bold" color="primary.main">
                  15+
                </Typography>
                <Typography variant="body2">
                  Years Experience
                </Typography>
              </Paper>
              
              {/* Floating elements */}
              <Card 
                sx={{ 
                  position: 'absolute', 
                  top: 40, 
                  left: -30, 
                  p: 2, 
                  borderRadius: 3,
                  display: { xs: 'none', lg: 'block' },
                  animation: `${float} 5s ease-in-out infinite`,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar sx={{ bgcolor: theme.palette.primary.main, mr: 1, width: 32, height: 32 }}>
                    <CheckCircleIcon sx={{ fontSize: 20 }} />
                  </Avatar>
                  <Typography variant="body2" fontWeight="bold">
                    Certified Experts
                  </Typography>
                </Box>
              </Card>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative' }}>
              <Chip 
                label="ABOUT US" 
                color="primary" 
                variant="outlined"
                sx={{ 
                  mb: 2, 
                  px: 1, 
                  fontWeight: 'bold',
                  background: alpha(theme.palette.primary.main, 0.1)
                }} 
              />
              
              <Typography variant="h3" fontWeight="bold" gutterBottom>
                Building Excellence Since 2024
              </Typography>
              
              <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 3 }}>
                With over 15 years of experience in the construction industry, VersaBuild has 
                established itself as a leader in quality construction and customer satisfaction. 
                Our team of skilled professionals is dedicated to turning your vision into reality.
              </Typography>
              
              <Box sx={{ mb: 3 }}>
                {['Quality Materials', 'Skilled Professionals', 'On-Time Delivery', 'Competitive Pricing'].map((item, index) => (
                  <Grow in={true} timeout={800} key={index} style={{ transitionDelay: `${index * 200}ms` }}>
                    <Box display="flex" alignItems="center" sx={{ mb: 1.5 }}>
                      <CheckCircleIcon color="primary" sx={{ mr: 1.5 }} />
                      <Typography variant="body1" fontWeight="500">{item}</Typography>
                    </Box>
                  </Grow>
                ))}
              </Box>
              
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 4 }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  endIcon={<EastIcon />}
                  sx={{ 
                    px: 4, 
                    py: 1.5,
                    borderRadius: 2,
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    boxShadow: `0 8px 16px ${alpha(theme.palette.primary.main, 0.3)}`,
                    '&:hover': {
                      boxShadow: `0 12px 20px ${alpha(theme.palette.primary.main, 0.4)}`,
                    }
                  }}
                >
                  Learn More About Us
                </Button>
                
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  startIcon={<PlayIcon />}
                  sx={{ 
                    px: 4, 
                    py: 1.5,
                    borderRadius: 2,
                    borderWidth: 2,
                    '&:hover': {
                      borderWidth: 2,
                    }
                  }}
                >
                  Watch Video
                </Button>
              </Box>
              
              {/* Achievement badges */}
              <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
                <Paper 
                  elevation={2} 
                  sx={{ 
                    p: 2, 
                    borderRadius: 3, 
                    textAlign: 'center',
                    flex: 1,
                    background: alpha(theme.palette.primary.main, 0.05)
                  }}
                >
                  <Typography variant="h5" fontWeight="bold" color="primary.main">
                    20+
                  </Typography>
                  <Typography variant="body2">
                    Team Members
                  </Typography>
                </Paper>
                
                <Paper 
                  elevation={2} 
                  sx={{ 
                    p: 2, 
                    borderRadius: 3, 
                    textAlign: 'center',
                    flex: 1,
                    background: alpha(theme.palette.primary.main, 0.05)
                  }}
                >
                  <Typography variant="h5" fontWeight="bold" color="primary.main">
                    98%
                  </Typography>
                  <Typography variant="body2">
                    Client Satisfaction
                  </Typography>
                </Paper>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default EnhancedSections;