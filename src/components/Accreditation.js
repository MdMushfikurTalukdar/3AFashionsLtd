// components/Accreditation.jsx
import React, { useRef } from 'react';
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
    background: 'linear-gradient(to right, #f8fafc, transparent)',
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
    background: 'linear-gradient(to left, #f8fafc, transparent)',
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
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(3, 4),
  borderRadius: theme.spacing(2),
  background: '#ffffff',
  boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  minWidth: '200px',
  minHeight: '120px',
  border: '2px solid rgba(0,0,0,0.04)',
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-5px) scale(1.05)',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.12)',
    borderColor: '#1a4b6d',
  },
  '&:hover .logo-image': {
    transform: 'scale(1.1)',
  },
  '&:hover .logo-label': {
    opacity: 1,
    transform: 'translateY(0)',
  },
  '&:hover .hover-overlay': {
    opacity: 1,
  },
}));

const LogoImage = styled('div')(({ theme }) => ({
  width: '100%',
  height: '60px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  '& img': {
    maxWidth: '140px',
    maxHeight: '60px',
    objectFit: 'contain',
  },
  '& svg': {
    maxWidth: '140px',
    maxHeight: '60px',
  },
}));

const Label = styled(Typography)(({ theme }) => ({
  fontSize: '0.7rem',
  fontWeight: 600,
  color: '#3b6e8f',
  textAlign: 'center',
  marginTop: theme.spacing(1),
  letterSpacing: '0.5px',
  textTransform: 'uppercase',
  opacity: 0,
  transform: 'translateY(10px)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
}));

const HoverOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'linear-gradient(135deg, rgba(26, 75, 109, 0.05), rgba(45, 106, 143, 0.02))',
  opacity: 0,
  transition: 'opacity 0.4s ease',
  pointerEvents: 'none',
}));

// SVG Logos for each accreditation
const OekoTexLogo = () => (
  <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="200" height="80" fill="none" />
    <text x="100" y="35" textAnchor="middle" fontSize="18" fontWeight="700" fill="#1a4b6d" fontFamily="Arial, sans-serif">
      OEKO-TEX®
    </text>
    <text x="100" y="52" textAnchor="middle" fontSize="9" fill="#3b6e8f" fontFamily="Arial, sans-serif" fontWeight="600">
      CONFIDENCE IN TEXTILES
    </text>
    <text x="100" y="65" textAnchor="middle" fontSize="14" fontWeight="700" fill="#1a4b6d" fontFamily="Arial, sans-serif">
      STANDARD 100
    </text>
  </svg>
);

const OrganicLogo = () => (
  <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="200" height="80" fill="none" />
    <circle cx="100" cy="35" r="20" fill="none" stroke="#2d6a8f" strokeWidth="3" />
    <text x="100" y="32" textAnchor="middle" fontSize="20" fontWeight="700" fill="#2d6a8f" fontFamily="Arial, sans-serif">
      ORGANIC
    </text>
    <text x="100" y="52" textAnchor="middle" fontSize="8" fill="#3b6e8f" fontFamily="Arial, sans-serif">
      Certified By CCPB
    </text>
    <text x="100" y="65" textAnchor="middle" fontSize="8" fontWeight="600" fill="#1a4b6d" fontFamily="Arial, sans-serif">
      License no. CCPB 00053216
    </text>
  </svg>
);

const AmforiLogo = () => (
  <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="200" height="80" fill="none" />
    <text x="100" y="35" textAnchor="middle" fontSize="20" fontWeight="700" fill="#c0392b" fontFamily="Arial, sans-serif" letterSpacing="2">
      amfori
    </text>
    <text x="100" y="52" textAnchor="middle" fontSize="9" fill="#3b6e8f" fontFamily="Arial, sans-serif" fontWeight="500">
      Trade with purpose
    </text>
  </svg>
);

const BSCILogo = () => (
  <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="200" height="80" fill="none" />
    <rect x="60" y="15" width="80" height="50" rx="5" fill="#1a4b6d" />
    <text x="100" y="40" textAnchor="middle" fontSize="12" fontWeight="700" fill="white" fontFamily="Arial, sans-serif" letterSpacing="3">
      BSCI
    </text>
    <text x="100" y="55" textAnchor="middle" fontSize="6" fontWeight="400" fill="white" fontFamily="Arial, sans-serif" letterSpacing="1">
      Business Social Compliance Initiative
    </text>
  </svg>
);

// Accreditation data
const accreditations = [
  {
    id: 1,
    name: 'OEKO-TEX® Standard 100',
    logo: OekoTexLogo,
    label: 'OEKO-TEX® STANDARD 100',
    description: 'Confidence in Textiles',
    link: 'https://www.oeko-tex.com/en/our-standards/standard-100-by-oeko-tex',
  },
  {
    id: 2,
    name: 'Organic Certification',
    logo: OrganicLogo,
    label: 'ORGANIC Certified',
    description: 'CCPB License no. 00053216',
    link: 'https://www.ccpb.it/en/',
  },
  {
    id: 3,
    name: 'amfori BSCI',
    logo: AmforiLogo,
    label: 'amfori BSCI',
    description: 'Trade with purpose',
    link: 'https://www.amfori.org/',
  },
  {
    id: 4,
    name: 'BSCI Compliance',
    logo: BSCILogo,
    label: 'BSCI',
    description: 'Business Social Compliance Initiative',
    link: 'https://www.bsci.com/',
  },
];

const Accreditation = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const scrollRef = useRef(null);

  // Duplicate accreditations for seamless scrolling
  const duplicateAccreditations = [...accreditations, ...accreditations, ...accreditations];

  // Adjust scroll speed based on screen size
  const getScrollSpeed = () => {
    if (isMobile) return 20;
    if (isTablet) return 25;
    return 30;
  };

  const handleClick = (link) => {
    window.open(link, '_blank');
  };

  return (
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
          backgroundImage: 'radial-gradient(circle at 20% 50%, #1a4b6d 1px, transparent 1px)',
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
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              background: 'linear-gradient(135deg, #0b2b3f 0%, #1a4b6d 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              mb: 1,
            }}
          >
            Accreditation
          </Typography>
          <Box
            sx={{
              width: '80px',
              height: '4px',
              background: 'linear-gradient(90deg, #1a4b6d, #3b6e8f)',
              borderRadius: '2px',
              margin: '0 auto',
            }}
          />
          <Typography
            variant="body1"
            sx={{
              color: '#3b6e8f',
              mt: 1.5,
              fontSize: { xs: '0.9rem', sm: '1rem' },
            }}
          >
            Our certifications and accreditations that ensure quality and trust
          </Typography>
        </Box>

        {/* Scrolling Logos */}
        <ScrollContainer>
          <ScrollingContent speed={getScrollSpeed()}>
            {duplicateAccreditations.map((accreditation, index) => (
              <LogoWrapper 
                key={`${accreditation.id}-${index}`}
                onClick={() => handleClick(accreditation.link)}
              >
                <HoverOverlay className="hover-overlay" />
                <LogoImage className="logo-image">
                  <accreditation.logo />
                </LogoImage>
                <Label className="logo-label">
                  {accreditation.label}
                </Label>
              </LogoWrapper>
            ))}
          </ScrollingContent>
        </ScrollContainer>

        {/* Bottom Information */}
        <Box
          sx={{
            mt: 4,
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            gap: { xs: 2, sm: 4 },
            flexWrap: 'wrap',
            p: 3,
            background: 'white',
            borderRadius: 2,
            boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
          }}
        >
          {accreditations.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-3px)',
                },
              }}
              onClick={() => handleClick(item.link)}
            >
              <Box
                sx={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #1a4b6d, #3b6e8f)',
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  color: '#1a4b6d',
                  fontWeight: 500,
                  fontSize: '0.8rem',
                  '&:hover': {
                    color: '#3b6e8f',
                  },
                }}
              >
                {item.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Accreditation;