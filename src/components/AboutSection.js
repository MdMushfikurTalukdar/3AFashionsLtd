import React, { useState, useEffect, useRef } from 'react';

import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  Paper,
  Avatar,
  IconButton,
  Fade,
  Zoom,
  useMediaQuery,
  useTheme,
  Divider,
  LinearProgress,
  Tooltip,
  AvatarGroup,
} from '@mui/material';
import {
  Factory,
  People,
  TrendingUp,
  Security,
  CheckCircle,
  ArrowForward,
  PlayArrow,
  Pause,
  EmojiEvents,
  Business,
  LocationOn,
  CalendarToday,
  LinkedIn,
  Facebook,
  Twitter,
  Instagram,
  Star,
  StarBorder,
  FormatQuote,
  Verified,
  Speed,
  Shield,
  ThumbUp,
  WorkspacePremium,
} from '@mui/icons-material';
import { keyframes } from '@mui/system';

// Animation keyframes
const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(1deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.03); opacity: 1; }
  100% { transform: scale(1); opacity: 0.8; }
`;

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const slideUp = keyframes`
  0% { transform: translateY(50px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const AboutSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [scrolled, setScrolled] = useState(false);


  const coreValues = [
    { 
      icon: <WorkspacePremium />, 
      title: 'Quality First',
      description: 'Commitment to excellence in every product',
      color: '#ff6b35',
    },
    { 
      icon: <Speed />, 
      title: 'Innovation',
      description: 'Embracing technology for better solutions',
      color: '#2196f3',
    },
    { 
      icon: <Shield />, 
      title: 'Sustainability',
      description: 'Eco-friendly manufacturing practices',
      color: '#4caf50',
    },
    { 
      icon: <ThumbUp />, 
      title: 'Trust',
      description: 'Building lasting relationships with clients',
      color: '#ff9800',
    },
  ];

  const achievements = [
    { year: '1992', title: 'Founded', description: 'Started journey in garment manufacturing' },
    { year: '2000', title: 'Expansion', description: 'Opened second production facility' },
    { year: '2010', title: 'Innovation', description: 'Introduced modern machinery' },
    { year: '2020', title: 'Sustainability', description: 'Adopted eco-friendly practices' },
  ];

  const teamMembers = [
    { name: 'Mr. Rahman', role: 'CEO', image: '' },
    { name: 'Ms. Akter', role: 'Head of Production', image: '' },
    { name: 'Mr. Khan', role: 'Quality Manager', image: '' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box id="aboutSection" sx={{ overflow: 'hidden' }}>
      {/* Full-width Hero Section with Overlay */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '70vh', md: '80vh' },
          minHeight: { xs: '500px', md: '600px' },
          width: '100%',
          background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRagllQrURDMtTolK6saRRyEBYAnVu2cG233RCjyrXU-g&s=10)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 0,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(10,43,74,0.92) 0%, rgba(10,43,74,0.7) 50%, rgba(255,107,53,0.3) 100%)',
          },
        }}
      >
        {/* Animated Shapes */}
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            zIndex: 0,
          }}
        >
          {[...Array(8)].map((_, i) => (
            <Box
              key={i}
              sx={{
                position: 'absolute',
                borderRadius: '50%',
                background: `rgba(255, 107, 53, ${0.02 + i * 0.005})`,
                width: `${200 + i * 100}px`,
                height: `${200 + i * 100}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `${float} ${8 + i * 2}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </Box>

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <Fade in timeout={1000}>
            <Box>
              
              <Typography
                variant="h1"
                component="h1"
                fontWeight="bold"
                sx={{
                  fontSize: { xs: '2.8rem', sm: '3.5rem', md: '5rem' },
                  color: 'white',
                  mb: 2,
                  textShadow: '0 4px 30px rgba(0,0,0,0.3)',
                  '& span': {
                    background: 'linear-gradient(90deg, #ff6b35, #ff4500)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  },
                }}
              >
                Building <span>Excellence</span> in Every Stitch
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: 'rgba(255,255,255,0.9)',
                  maxWidth: 700,
                  mx: 'auto',
                  fontSize: { xs: '1.1rem', md: '1.5rem' },
                  mb: 4,
                  fontWeight: 300,
                  lineHeight: 1.6,
                }}
              >
                From humble beginnings in 1992 to becoming a global leader in garment manufacturing, 
                we've stayed true to our commitment to quality and innovation.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForward />}
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: '50px',
                    background: 'linear-gradient(135deg, #ff6b35, #ff4500)',
                    boxShadow: '0 8px 30px rgba(255,107,53,0.4)',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: '0 12px 40px rgba(255,107,53,0.6)',
                    },
                  }}
                >
                  Explore Our Story
                </Button>
                
              </Box>
            </Box>
          </Fade>
        </Container>

        {/* Scroll Indicator */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 30,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 2,
            animation: `${pulse} 2s ease-in-out infinite`,
          }}
        >
          <Box
            sx={{
              width: 30,
              height: 50,
              border: '2px solid rgba(255,255,255,0.3)',
              borderRadius: '15px',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                top: 8,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 4,
                height: 8,
                borderRadius: '2px',
                background: 'white',
                animation: `${float} 2s ease-in-out infinite`,
              },
            }}
          />
        </Box>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        

        {/* About Content with Cards */}
        <Grid container spacing={6} sx={{ mb: 6 }}>
          <Grid item xs={12} md={7}>
            <Fade in timeout={1000}>
              <Box>
                <Chip
                  label="Who We Are"
                  sx={{
                    backgroundColor: '#ff6b35',
                    color: 'white',
                    fontWeight: 'bold',
                    mb: 2,
                  }}
                />
                <Typography
                  variant="h3"
                  gutterBottom
                  fontWeight="bold"
                  sx={{
                    color: '#0a2b4a',
                    fontSize: { xs: '2rem', md: '2.8rem' },
                    '& span': {
                      color: '#ff6b35',
                    },
                  }}
                >
                  Crafting <span>Quality</span> Since 1992
                </Typography>
                <Divider sx={{ width: 80, borderColor: '#ff6b35', borderWidth: 3, mb: 3 }} />
                <Typography variant="body1" paragraph sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                  <strong style={{ color: '#ff6b35' }}>W. Apparels Ltd.</strong> began its journey in 
                  1992 with a vision to revolutionize the garment manufacturing industry in Bangladesh. 
                  Over three decades, we've grown from a small facility to a global leader, 
                  exporting to over 50 countries worldwide.
                </Typography>
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                  Our success is built on a foundation of <strong>quality</strong>, 
                  <strong> innovation</strong>, and <strong>sustainability</strong>. With a 
                  team of 500+ dedicated professionals and state-of-the-art facilities, 
                  we deliver excellence in every product we manufacture.
                </Typography>
                
                {/* Core Values */}
                <Grid container spacing={2} sx={{ mt: 2 }}>
                  {coreValues.map((value, index) => (
                    <Grid item xs={6} md={3} key={index}>
                      <Paper
                        elevation={0}
                        sx={{
                          p: 2,
                          textAlign: 'center',
                          borderRadius: 2,
                          background: `linear-gradient(135deg, ${value.color}10, ${value.color}05)`,
                          border: `1px solid ${value.color}20`,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-5px)',
                            boxShadow: `0 8px 25px ${value.color}30`,
                            borderColor: value.color,
                          },
                        }}
                      >
                        <Box sx={{ color: value.color, mb: 1 }}>
                          {value.icon}
                        </Box>
                        <Typography variant="body2" fontWeight="bold" color="#0a2b4a">
                          {value.title}
                        </Typography>
                        <Typography variant="caption" color="textSecondary">
                          {value.description}
                        </Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Fade>
          </Grid>
        </Grid>
        
      </Container>

      {/* Call to Action */}
      {/* <Box
        sx={{
          background: 'linear-gradient(135deg, #0a2b4a 0%, #1a3a5a 100%)',
          py: 6,
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url(https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1920&h=200&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.05,
          },
        }}
      >
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h4" fontWeight="bold" color="white" gutterBottom>
            Ready to Partner With Us?
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)', mb: 3 }}>
            Join hundreds of satisfied clients who trust W. Apparels for their garment manufacturing needs.
          </Typography>
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForward />}
            sx={{
              px: 5,
              py: 1.5,
              borderRadius: '50px',
              background: 'linear-gradient(135deg, #ff6b35, #ff4500)',
              boxShadow: '0 8px 30px rgba(255,107,53,0.4)',
              '&:hover': {
                transform: 'translateY(-3px)',
                boxShadow: '0 12px 40px rgba(255,107,53,0.6)',
              },
            }}
          >
            Get In Touch
          </Button>
        </Container>
      </Box> */}
    </Box>
  );
};

export default AboutSection;