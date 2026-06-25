import React from 'react';
import {
  Box,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
  Paper,
} from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';

// Animation for continuous scrolling
const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const ScrollContainer = styled(Box)(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  width: '100%',
  padding: theme.spacing(2, 0),
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100px',
    height: '100%',
    background: 'linear-gradient(to right, #ffffff, transparent)',
    zIndex: 2,
    pointerEvents: 'none',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    width: '100px',
    height: '100%',
    background: 'linear-gradient(to left, #ffffff, transparent)',
    zIndex: 2,
    pointerEvents: 'none',
  },
}));

const ScrollingContent = styled(Box)(({ speed = 30 }) => ({
  display: 'flex',
  gap: '60px',
  animation: `${scroll} ${speed}s linear infinite`,
  width: 'max-content',
  '&:hover': {
    animationPlayState: 'paused',
  },
}));

const LogoWrapper = styled(Paper)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(3, 4),
  borderRadius: theme.spacing(2),
  background: '#ffffff',
  boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
  transition: 'all 0.3s ease',
  minWidth: '180px',
  minHeight: '100px',
  border: '1px solid rgba(0,0,0,0.04)',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 30px rgba(99, 102, 241, 0.12)',
    borderColor: 'primary.main',
  },
  '& img': {
    maxWidth: '140px',
    maxHeight: '60px',
    objectFit: 'contain',
    filter: 'grayscale(0%)',
    transition: 'filter 0.3s ease',
  },
  '&:hover img': {
    filter: 'grayscale(0%) brightness(1)',
  },
}));

const LogoText = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '1.8rem',
  letterSpacing: '1px',
  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  '&.small': {
    fontSize: '1.2rem',
  },
  '&.large': {
    fontSize: '2.5rem',
  },
}));

// Client data with logo placeholders (using text-based logos for now)
const clients = [
  {
    id: 1,
    name: 'PEP&CO',
    logo: 'PEP&CO',
    style: 'large',
    color: '#dc2626',
  },
  {
    id: 2,
    name: 'HELLENIC GROUP',
    logo: 'HELLENIC',
    style: 'large',
    color: '#2563eb',
  },
  {
    id: 3,
    name: 'Enstingis family',
    logo: 'Enstingis',
    style: 'small',
    color: '#7c3aed',
  },
  {
    id: 4,
    name: 'Fashion Hub',
    logo: 'FASHION',
    style: 'large',
    color: '#059669',
  },
  {
    id: 5,
    name: 'Tech Textiles',
    logo: 'TECH',
    style: 'small',
    color: '#0ea5e9',
  },
  {
    id: 6,
    name: 'Global Logistics',
    logo: 'GLOBAL',
    style: 'large',
    color: '#f59e0b',
  },
  {
    id: 7,
    name: 'Quality Apparels',
    logo: 'QUALITY',
    style: 'small',
    color: '#ec4899',
  },
  {
    id: 8,
    name: '3NA Fashion',
    logo: '3NA',
    style: 'large',
    color: '#8b5cf6',
  },
  {
    id: 9,
    name: 'W. Apparels Ltd.',
    logo: 'WAPP',
    style: 'small',
    color: '#6366f1',
  },
  {
    id: 10,
    name: 'Fashion Group',
    logo: 'FG',
    style: 'large',
    color: '#dc2626',
  },
];

const OurClients = () => {
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  // Duplicate clients for seamless scrolling
  const duplicateClients = [...clients, ...clients, ...clients];

  // Adjust scroll speed based on screen size
  const getScrollSpeed = () => {
    if (isMobile) return 20;
    if (isTablet) return 25;
    return 30;
  };

  return (
    <Box id="clients" sx={{ overflow: 'hidden' }}>
    <Box sx={{ 
      py: { xs: 4, sm: 6, md: 8 },
      bgcolor: '#f8fafc',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle background pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.03,
          backgroundImage: 'radial-gradient(circle at 20% 50%, #6366f1 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="xl">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 3, sm: 4, md: 5 } }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' },
              background: 'linear-gradient(135deg, #1a1a2e 0%, #6366f1 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              mb: 1,
            }}
          >
            Our Clients
          </Typography>
          <Box
            sx={{
              width: '60px',
              height: '4px',
              background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
              borderRadius: '2px',
              margin: '0 auto',
            }}
          />
        </Box>

        {/* Scrolling Logos */}
        <ScrollContainer>
          <ScrollingContent speed={getScrollSpeed()}>
            {duplicateClients.map((client, index) => (
              <LogoWrapper key={`${client.id}-${index}`}>
                {client.logo.length <= 4 ? (
                  <LogoText 
                    className={client.style === 'small' ? 'small' : 'large'}
                    sx={{ color: client.color }}
                  >
                    {client.logo}
                  </LogoText>
                ) : (
                  <LogoText className={client.style === 'small' ? 'small' : 'large'}>
                    {client.logo}
                  </LogoText>
                )}
              </LogoWrapper>
            ))}
          </ScrollingContent>
        </ScrollContainer>
      </Container>
    </Box>
    </Box>
  );
};

export default OurClients;