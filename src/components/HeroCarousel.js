import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Button,
  Fade,
  useMediaQuery,
  useTheme,
  Paper,
} from '@mui/material';
import {
  CheckCircle,
  Phone,
  Email,
  LocationOn,
  EmojiEvents,
  TrendingUp,
  Build,
} from '@mui/icons-material';
import { keyframes } from '@mui/system';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const HeroCarousel = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const carouselData = [
    {
      image: 'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?w=1200&h=600&fit=crop',
      title: "Let's Do Business Together",
      subtitle: 'Our promise is to keep strong commitments, best quality and building good relationships.',
      features: [
        { icon: <CheckCircle />, text: '30+ Years of Experience' },
        { icon: <CheckCircle />, text: 'Best Quality Products' },
        { icon: <CheckCircle />, text: 'Maintain Consistency' },
      ],
      stats: [
        { value: '30+', label: 'Years Experience', icon: <EmojiEvents /> },
        { value: '500+', label: 'Happy Clients', icon: <TrendingUp /> },
        { value: '98%', label: 'Satisfaction Rate', icon: <Build /> },
      ],
      phone: '+8801853340765',
      email: 'info@wapparels.com',
      address: '295/1A/4 Rayer Bazar, Dhaka-1200, Bangladesh',
      gradient: 'linear-gradient(135deg, rgba(10,43,74,0.85) 0%, rgba(255,107,53,0.2) 100%)',
    },
    {
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&h=600&fit=crop',
      title: 'Quality Garment Manufacturing',
      subtitle: 'Delivering excellence in every stitch with our state-of-the-art facilities.',
      features: [
        { icon: <CheckCircle />, text: 'Modern Machinery' },
        { icon: <CheckCircle />, text: 'Skilled Workforce' },
        { icon: <CheckCircle />, text: 'Quality Assurance' },
      ],
      stats: [
        { value: '50+', label: 'Machines', icon: <Build /> },
        { value: '200+', label: 'Employees', icon: <EmojiEvents /> },
        { value: '100%', label: 'Quality Check', icon: <CheckCircle /> },
      ],
      phone: '+8801819274335',
      email: 'sales@wapparels.com',
      address: '295/1A/4 Rayer Bazar, Dhaka-1200, Bangladesh',
      gradient: 'linear-gradient(135deg, rgba(10,43,74,0.85) 0%, rgba(255,107,53,0.15) 100%)',
    },
    {
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f2f3?w=1200&h=600&fit=crop',
      title: 'Sustainable Fashion Future',
      subtitle: 'Committed to eco-friendly practices and sustainable manufacturing for a better tomorrow.',
      features: [
        { icon: <CheckCircle />, text: 'Eco-Friendly Practices' },
        { icon: <CheckCircle />, text: 'Waste Management' },
        { icon: <CheckCircle />, text: 'Energy Efficiency' },
      ],
      stats: [
        { value: '85%', label: 'Less Waste', icon: <TrendingUp /> },
        { value: '60%', label: 'Energy Saving', icon: <EmojiEvents /> },
        { value: '100%', label: 'Green Energy', icon: <CheckCircle /> },
      ],
      phone: '+8801853340765',
      email: 'sustainability@wapparels.com',
      address: '295/1A/4 Rayer Bazar, Dhaka-1200, Bangladesh',
      gradient: 'linear-gradient(135deg, rgba(10,43,74,0.85) 0%, rgba(46,204,113,0.2) 100%)',
    },
  ];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % carouselData.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused, carouselData.length]);

  const currentData = carouselData[currentSlide];

  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: '100vh', md: '95vh' },
        minHeight: { xs: '600px', md: '700px' },
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#0a2b4a',
      }}
    >
      {/* Background */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${currentData.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-image 0.8s ease-in-out',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: currentData.gradient,
          },
        }}
      />

      {/* Content */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Fade in={true} timeout={1000}>
          <Box sx={{ color: 'white', textAlign: 'center' }}>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              fontWeight="bold"
              sx={{
                fontSize: { xs: '2rem', sm: '2.8rem', md: '4rem' },
                mb: 2,
                textShadow: '0 4px 20px rgba(0,0,0,0.3)',
                lineHeight: 1.2,
              }}
            >
              {currentData.title}
            </Typography>

            <Typography
              variant="h6"
              sx={{
                mb: 4,
                opacity: 0.95,
                maxWidth: 700,
                mx: 'auto',
                fontSize: { xs: '1rem', md: '1.3rem' },
                textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                lineHeight: 1.6,
              }}
            >
              {currentData.subtitle}
            </Typography>

            {/* Features */}
            <Grid container spacing={2} justifyContent="center" sx={{ mb: 4 }}>
              {currentData.features.map((item, index) => (
                <Grid item xs={12} sm={4} key={index}>
                  <Paper
                    elevation={0}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 1,
                      p: 1.5,
                      backgroundColor: 'rgba(255,255,255,0.08)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '12px',
                      border: '1px solid rgba(255,255,255,0.1)',
                      animation: `${float} ${3 + index}s ease-in-out infinite`,
                      animationDelay: `${index * 0.3}s`,
                    }}
                  >
                    {React.cloneElement(item.icon, { sx: { fontSize: 24, color: '#ff6b35' } })}
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      {item.text}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>

            {/* Stats */}
            <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap' }}>
              {currentData.stats.map((stat, index) => (
                <Box key={index} sx={{ textAlign: 'center' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                    {React.cloneElement(stat.icon, { sx: { color: '#ff6b35', fontSize: 28 } })}
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#ff6b35' }}>
                      {stat.value}
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* Contact Buttons */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                startIcon={<Phone />}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: '50px',
                  fontWeight: 'bold',
                  boxShadow: '0 8px 25px rgba(255,107,53,0.4)',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 12px 35px rgba(255,107,53,0.6)',
                  },
                }}
              >
                {isMobile ? 'Call Us' : currentData.phone}
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                startIcon={<Email />}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: '50px',
                  fontWeight: 'bold',
                  borderColor: 'rgba(255,255,255,0.3)',
                  backdropFilter: 'blur(10px)',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    transform: 'translateY(-3px)',
                    borderColor: '#ff6b35',
                  },
                }}
              >
                {isMobile ? 'Email Us' : currentData.email}
              </Button>
            </Box>

            <Typography
              variant="body2"
              sx={{
                mt: 3,
                opacity: 0.8,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
              }}
            >
              <LocationOn sx={{ color: '#ff6b35' }} />
              {currentData.address}
            </Typography>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default HeroCarousel;