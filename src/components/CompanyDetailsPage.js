import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Container,
  Typography,
  Box,
  Paper,
  Divider,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Avatar,
  Fade,
  Zoom,
  Slide,
  Grow,
  Stack,
  IconButton,
  Tooltip,
  Collapse,
  Grid,
} from '@mui/material';
import {
  History,
  CheckCircle,
  Factory,
  Public,
  Download,
  ArrowBack,
  TrendingUp,
  People,
  ThumbUp,
  Shield,
  Speed,
  WorkspacePremium,
  LocationOn,
  Phone,
  Email,
  Business,
  Assessment,
  Gavel,
  Recycling,
  Star,
  Timeline as TimelineIcon,
  PlayArrow,
  Pause,
  ExpandMore,
  ExpandLess,
  AutoAwesome,
  RocketLaunch,
  Lightbulb,
  Forest,
  Verified,
  BarChart,
  LinkedIn,
  Twitter,
  Facebook,
  YouTube,
  Instagram,
  WhatsApp,
  Timeline,
} from '@mui/icons-material';
import { keyframes } from '@mui/system';

// Enhanced Animations
const floatAnimation = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(2deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const shimmerAnimation = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const pulseGlow = keyframes`
  0% { box-shadow: 0 0 20px rgba(255,107,53,0.3); }
  50% { box-shadow: 0 0 40px rgba(255,107,53,0.6); }
  100% { box-shadow: 0 0 20px rgba(255,107,53,0.3); }
`;

const countUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const CompanyDetailsPage = ({ onNavigate }) => {
    const navigate = useNavigate();

  const [expandedSection, setExpandedSection] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [counts, setCounts] = useState({});

  // Animated counter effect
  useEffect(() => {
    const stats = [
      { id: 'years', target: 30 },
      { id: 'countries', target: 50 },
      { id: 'employees', target: 500 },
      { id: 'products', target: 1000 },
      { id: 'satisfaction', target: 98 },
      { id: 'partners', target: 100 },
    ];

    stats.forEach((stat) => {
      let current = 0;
      const increment = Math.ceil(stat.target / 50);
      const interval = setInterval(() => {
        if (current < stat.target) {
          current += increment;
          if (current > stat.target) current = stat.target;
          setCounts(prev => ({ ...prev, [stat.id]: current }));
        } else {
          clearInterval(interval);
        }
      }, 30);
      return () => clearInterval(interval);
    });
  }, []);

  // Function to handle brochure download
  const handleDownloadBrochure = () => {
    const brochureContent = `
      ╔══════════════════════════════════════════════════════════════╗
      ║                                                              ║
      ║     W. APPARELS LTD. - CORPORATE PROFILE                    ║
      ║     Building Excellence Since 1992                          ║
      ║                                                              ║
      ╚══════════════════════════════════════════════════════════════╝

      ┌──────────────────────────────────────────────────────────────┐
      │                    ABOUT US                                 │
      ├──────────────────────────────────────────────────────────────┤
      │                                                             │
      │  W. Apparels Ltd. is a premier garment manufacturing        │
      │  company established in 1992. We export to over 50          │
      │  countries worldwide with 500+ dedicated employees.         │
      │                                                             │
      └──────────────────────────────────────────────────────────────┘

      ┌──────────────────────────────────────────────────────────────┐
      │                    OUR MISSION                              │
      ├──────────────────────────────────────────────────────────────┤
      │                                                             │
      │  To deliver exceptional quality garments while maintaining  │
      │  sustainable practices and creating value for our clients,  │
      │  employees, and communities.                                │
      │                                                             │
      └──────────────────────────────────────────────────────────────┘

      ┌──────────────────────────────────────────────────────────────┐
      │                    OUR VISION                               │
      ├──────────────────────────────────────────────────────────────┤
      │                                                             │
      │  To be the most trusted and innovative garment              │
      │  manufacturer globally, setting new standards in quality,   │
      │  sustainability, and social responsibility.                 │
      │                                                             │
      └──────────────────────────────────────────────────────────────┘

      ┌──────────────────────────────────────────────────────────────┐
      │                  CORE VALUES                                │
      ├──────────────────────────────────────────────────────────────┤
      │                                                             │
      │  ✦ Quality First - Commitment to excellence                 │
      │  ✦ Innovation - Embracing technology                        │
      │  ✦ Sustainability - Eco-friendly practices                  │
      │  ✦ Trust - Building lasting relationships                   │
      │  ✦ People First - Investing in employees                    │
      │  ✦ Global Perspective - Understanding diverse markets       │
      │                                                             │
      └──────────────────────────────────────────────────────────────┘

      ┌──────────────────────────────────────────────────────────────┐
      │                  KEY STATISTICS                             │
      ├──────────────────────────────────────────────────────────────┤
      │                                                             │
      │  ╔═══════════════════════════════════════════════════════╗  │
      │  ║  30+    Years of Excellence                          ║  │
      │  ║  50+    Countries Served                             ║  │
      │  ║  500+   Dedicated Employees                          ║  │
      │  ║  1000+  Products Delivered                           ║  │
      │  ║  98%    Client Satisfaction                          ║  │
      │  ║  100+   Global Partners                              ║  │
      │  ╚═══════════════════════════════════════════════════════╝  │
      │                                                             │
      └──────────────────────────────────────────────────────────────┘

      ┌──────────────────────────────────────────────────────────────┐
      │                CERTIFICATIONS                               │
      ├──────────────────────────────────────────────────────────────┤
      │                                                             │
      │  ✓ ISO 9001:2015 Quality Management                        │
      │  ✓ ISO 14001:2015 Environmental Management                 │
      │  ✓ OHSAS 18001:2007 Occupational Health & Safety           │
      │  ✓ WRAP Certified                                          │
      │  ✓ GOTS Certified                                          │
      │  ✓ OEKO-TEX Standard 100 Certified                         │
      │  ✓ SA8000 Social Accountability Certified                  │
      │  ✓ Higg Index Verified                                     │
      │                                                             │
      └──────────────────────────────────────────────────────────────┘

      ┌──────────────────────────────────────────────────────────────┐
      │                  CONTACT US                                 │
      ├──────────────────────────────────────────────────────────────┤
      │                                                             │
      │  Phone:  +880 1234 567890                                  │
      │  Email:   info@wapparels.com                               │
      │  Address: 123, Garment Industry Zone, Dhaka, Bangladesh    │
      │  Website: www.wapparels.com                                │
      │                                                             │
      └──────────────────────────────────────────────────────────────┘

      ╔══════════════════════════════════════════════════════════════╗
      ║     Thank you for your interest in W. Apparels Ltd.        ║
      ║     Together, we build excellence in every stitch.         ║
      ╚══════════════════════════════════════════════════════════════╝
    `;

    try {
      const blob = new Blob([brochureContent], { type: 'text/plain;charset=utf-8' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'W_Apparels_Corporate_Profile.txt';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Failed to download brochure. Please try again.');
    }
  };

  const handleDownloadPDF = () => {
    window.print();
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  // History Milestones Data
  const historyMilestones = [
    {
      year: '1992',
      title: 'The Beginning',
      description: 'W. Apparels Ltd. was founded with a vision to revolutionize the garment industry in Bangladesh.',
      icon: <History />,
      color: '#ff6b35',
      achievements: ['First factory established', '20 initial employees', 'Local market focus'],
    },
    {
      year: '1998',
      title: 'First Export',
      description: 'Successfully exported our first shipment to the European market, marking our entry into global trade.',
      icon: <Public />,
      color: '#2196f3',
      achievements: ['First international order', 'European market entry', 'Quality certification'],
    },
    {
      year: '2005',
      title: 'Expansion',
      description: 'Expanded operations with a new state-of-the-art manufacturing facility and 200+ new employees.',
      icon: <Factory />,
      color: '#4caf50',
      achievements: ['New facility built', '200+ employees hired', 'Production capacity doubled'],
    },
    {
      year: '2012',
      title: 'Global Recognition',
      description: 'Received international quality certifications and began exporting to 30+ countries worldwide.',
      icon: <TrendingUp />,
      color: '#ff9800',
      achievements: ['ISO certifications', '30+ export countries', 'Industry awards'],
    },
    {
      year: '2018',
      title: 'Digital Transformation',
      description: 'Implemented advanced manufacturing technologies and sustainable production practices.',
      icon: <Speed />,
      color: '#9c27b0',
      achievements: ['Smart factory implementation', 'Sustainability initiatives', 'Digital workflow'],
    },
    {
      year: '2023',
      title: 'Industry Leadership',
      description: 'Became a leading garment manufacturer with 500+ employees and 50+ global clients.',
      icon: <WorkspacePremium />,
      color: '#e91e63',
      achievements: ['50+ global clients', '500+ employees', 'Industry leader status'],
    },
  ];

  // Enhanced Core Values Data
  const coreValues = [
    {
      icon: <WorkspacePremium sx={{ fontSize: 40 }} />,
      title: 'Quality First',
      description: 'We never compromise on quality. Every product meets the highest international standards.',
      color: '#ff6b35',
      details: 'ISO 9001:2015 certified, 98% quality rating, 0% defect rate goal',
    },
    {
      icon: <Speed sx={{ fontSize: 40 }} />,
      title: 'Innovation',
      description: 'Embracing cutting-edge technology and innovative solutions to stay ahead in the industry.',
      color: '#2196f3',
      details: 'Smart manufacturing, AI integration, R&D investment',
    },
    {
      icon: <Shield sx={{ fontSize: 40 }} />,
      title: 'Sustainability',
      description: 'Committed to eco-friendly manufacturing practices and environmental responsibility.',
      color: '#4caf50',
      details: 'Green energy, Waste reduction, Eco-certified products',
    },
    {
      icon: <People sx={{ fontSize: 40 }} />,
      title: 'People First',
      description: 'Our employees are our greatest asset. We invest in their growth and well-being.',
      color: '#9c27b0',
      details: 'Training programs, Health benefits, Career development',
    },
    {
      icon: <ThumbUp sx={{ fontSize: 40 }} />,
      title: 'Trust & Integrity',
      description: 'Building lasting relationships through transparency, honesty, and reliability.',
      color: '#ff9800',
      details: '100% transparency, Ethical practices, Long-term partnerships',
    },
    {
      icon: <Public sx={{ fontSize: 40 }} />,
      title: 'Global Perspective',
      description: 'Understanding diverse markets and cultures to deliver excellence worldwide.',
      color: '#00bcd4',
      details: 'Multicultural team, Global standards, Cross-cultural expertise',
    },
  ];

  return (
    <Box sx={{ 
      bgcolor: '#f5f7fa', 
      minHeight: '100vh', 
      py: { xs: 2, sm: 3, md: 4 },
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background Decorative Elements */}
      <Box
        sx={{
          position: 'fixed',
          top: -200,
          right: -200,
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,107,53,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'fixed',
          bottom: -300,
          left: -300,
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(10,43,74,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Sticky Back Button */}
        <Slide direction="right" in timeout={500}>
          <Button
            startIcon={<ArrowBack />}
            onClick={() => navigate('/')}
            sx={{
              mb: { xs: 2, md: 3 },
              color: '#0a2b4a',
              fontWeight: 'bold',
              position: 'sticky',
              top: 16,
              zIndex: 100,
              backgroundColor: 'rgba(255,255,255,0.95)',
              backdropFilter: 'blur(10px)',
              borderRadius: '50px',
              px: 3,
              py: 1,
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              '&:hover': {
                backgroundColor: 'white',
                transform: 'translateX(-5px)',
                boxShadow: '0 8px 30px rgba(255,107,53,0.2)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Back to Home
          </Button>
        </Slide>

        {/* Hero Header - Journal Style */}
        <Fade in timeout={1000}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, sm: 4, md: 6 },
              mb: { xs: 3, md: 4 },
              borderRadius: { xs: 3, md: 4 },
              background: 'linear-gradient(135deg, #0a2b4a 0%, #1a4a7a 50%, #2a5a8a 100%)',
              color: 'white',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
            }}
          >
            {/* Animated Background */}
            <Box
              sx={{
                position: 'absolute',
                top: '-50%',
                right: '-30%',
                width: '80%',
                height: '200%',
                background: 'linear-gradient(45deg, transparent 30%, rgba(255,107,53,0.05) 50%, transparent 70%)',
                animation: `${shimmerAnimation} 8s ease-in-out infinite`,
                backgroundSize: '200% 100%',
                transform: 'rotate(15deg)',
                pointerEvents: 'none',
              }}
            />
            
            <Grid container spacing={{ xs: 2, md: 4 }} alignItems="center" sx={{ position: 'relative', zIndex: 1 }}>
              <Grid item xs={12} md={8}>
                <Chip
                  icon={<AutoAwesome sx={{ color: '#ff6b35' }} />}
                  label="Our Story"
                  sx={{
                    backgroundColor: 'rgba(255,107,53,0.2)',
                    color: '#ff6b35',
                    fontWeight: 'bold',
                    mb: { xs: 1, md: 2 },
                    fontSize: { xs: '0.8rem', md: '1rem' },
                    px: { xs: 1, md: 2 },
                    border: '1px solid rgba(255,107,53,0.3)',
                    '& .MuiChip-icon': {
                      color: '#ff6b35',
                    },
                  }}
                />
                <Typography
                  variant="h3"
                  gutterBottom
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.8rem' },
                    textShadow: '0 4px 20px rgba(0,0,0,0.3)',
                    background: 'linear-gradient(90deg, #ffffff, #ffd700)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    lineHeight: 1.2,
                  }}
                >
                  Building Excellence
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    opacity: 0.9,
                    fontWeight: 300,
                    lineHeight: 1.8,
                    fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.3rem' },
                    maxWidth: '90%',
                  }}
                >
                  From humble beginnings in 1992 to becoming a global leader in garment manufacturing, 
                  we've stayed true to our commitment to quality and innovation.
                </Typography>
                
                {/* Quick Stats */}
                <Stack 
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={{ xs: 1, sm: 2 }}
                  sx={{ mt: { xs: 2, md: 3 } }}
                >
                  {['30+ Years', '50+ Countries', '500+ Employees'].map((stat, index) => (
                    <Chip
                      key={index}
                      label={stat}
                      sx={{
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        color: 'white',
                        border: '1px solid rgba(255,255,255,0.2)',
                        '&:hover': {
                          backgroundColor: 'rgba(255,107,53,0.3)',
                          borderColor: '#ff6b35',
                        },
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                      }}
                    />
                  ))}
                </Stack>
              </Grid>
              <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
                <Zoom in timeout={1000}>
                  <Box
                    sx={{
                      p: { xs: 2, md: 3 },
                      borderRadius: '50%',
                      border: '3px solid #ff6b35',
                      display: 'inline-block',
                      backgroundColor: 'rgba(255,107,53,0.1)',
                      backdropFilter: 'blur(10px)',
                      animation: `${pulseGlow} 3s ease-in-out infinite`,
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: -8,
                        right: -8,
                        bottom: -8,
                        left: -8,
                        borderRadius: '50%',
                        border: '2px solid rgba(255,107,53,0.2)',
                        animation: `${pulseGlow} 3s ease-in-out infinite 1s`,
                      },
                    }}
                  >
                    <Typography 
                      variant="h2" 
                      sx={{ 
                        color: '#ff6b35', 
                        fontWeight: 900,
                        fontSize: { xs: '2.5rem', md: '4rem' },
                        lineHeight: 1,
                      }}
                    >
                      30+
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: 'white', 
                        fontWeight: '500',
                        fontSize: { xs: '0.7rem', md: '0.9rem' },
                      }}
                    >
                      Years of Excellence
                    </Typography>
                  </Box>
                </Zoom>
              </Grid>
            </Grid>
          </Paper>
        </Fade>

        {/* Interactive Timeline Section */}
        <Fade in timeout={1200}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 2, sm: 3, md: 4 },
              mb: { xs: 3, md: 4 },
              borderRadius: { xs: 3, md: 4 },
              background: 'linear-gradient(135deg, #ffffff, #fafafa)',
              border: '1px solid rgba(0,0,0,0.05)',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', mb: { xs: 2, md: 3 } }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <TimelineIcon sx={{ fontSize: { xs: 24, md: 30 }, color: '#ff6b35', mr: 1 }} />
                <Typography 
                  variant="h4" 
                  fontWeight="bold" 
                  sx={{ 
                    color: '#0a2b4a',
                    fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.2rem' },
                  }}
                >
                  Our Journey Through Time
                </Typography>
              </Box>
              <Tooltip title={isPlaying ? "Pause Animation" : "Play Animation"}>
                <IconButton 
                  onClick={() => setIsPlaying(!isPlaying)}
                  sx={{
                    color: '#ff6b35',
                    border: '2px solid #ff6b35',
                    '&:hover': {
                      backgroundColor: 'rgba(255,107,53,0.1)',
                    },
                  }}
                >
                  {isPlaying ? <Pause /> : <PlayArrow />}
                </IconButton>
              </Tooltip>
            </Box>
            <Divider sx={{ width: { xs: 50, md: 80 }, borderColor: '#ff6b35', borderWidth: 3, mb: { xs: 3, md: 4 } }} />

            <Grid container spacing={{ xs: 2, md: 3 }}>
              {historyMilestones.map((milestone, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Zoom in timeout={500 + index * 100}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: { xs: 2, md: 3 },
                        borderRadius: 3,
                        borderLeft: `4px solid ${milestone.color}`,
                        backgroundColor: '#f8f9fa',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        cursor: 'pointer',
                        '&:hover': {
                          transform: 'translateX(12px)',
                          boxShadow: `0 8px 30px ${milestone.color}40`,
                          backgroundColor: 'white',
                        },
                        animation: isPlaying ? `${floatAnimation} ${3 + index * 0.5}s ease-in-out infinite` : 'none',
                      }}
                      onClick={() => toggleSection(`milestone-${index}`)}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
                        <Avatar
                          sx={{
                            bgcolor: milestone.color,
                            width: { xs: 36, md: 40 },
                            height: { xs: 36, md: 40 },
                            mr: 2,
                            flexShrink: 0,
                          }}
                        >
                          {milestone.icon}
                        </Avatar>
                        <Box sx={{ flex: 1 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Typography 
                              variant="h6" 
                              fontWeight="bold" 
                              sx={{ 
                                color: milestone.color,
                                fontSize: { xs: '0.9rem', md: '1.1rem' },
                              }}
                            >
                              {milestone.year}
                            </Typography>
                            {expandedSection === `milestone-${index}` ? <ExpandLess /> : <ExpandMore />}
                          </Box>
                          <Typography 
                            variant="subtitle1" 
                            fontWeight="bold" 
                            sx={{ 
                              color: '#0a2b4a',
                              fontSize: { xs: '0.9rem', md: '1rem' },
                            }}
                          >
                            {milestone.title}
                          </Typography>
                          <Typography 
                            variant="body2" 
                            sx={{ 
                              color: 'text.secondary',
                              fontSize: { xs: '0.8rem', md: '0.9rem' },
                            }}
                          >
                            {milestone.description}
                          </Typography>
                        </Box>
                      </Box>
                      
                      <Collapse in={expandedSection === `milestone-${index}`}>
                        <Box sx={{ mt: 2, pl: { xs: 0, md: 7 } }}>
                          <Typography variant="subtitle2" fontWeight="bold" sx={{ color: '#0a2b4a', mb: 1 }}>
                            Key Achievements:
                          </Typography>
                          <List dense disablePadding>
                            {milestone.achievements.map((achievement, i) => (
                              <ListItem key={i} disablePadding sx={{ py: 0.5 }}>
                                <ListItemIcon sx={{ minWidth: 30 }}>
                                  <CheckCircle sx={{ color: '#4caf50', fontSize: 16 }} />
                                </ListItemIcon>
                                <ListItemText 
                                  primary={achievement}
                                  primaryTypographyProps={{ 
                                    fontSize: { xs: '0.8rem', md: '0.9rem' },
                                  }}
                                />
                              </ListItem>
                            ))}
                          </List>
                        </Box>
                      </Collapse>
                    </Paper>
                  </Zoom>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Fade>

        {/* Core Values - Enhanced Journal Style */}
        <Fade in timeout={1400}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 2, sm: 3, md: 4 },
              mb: { xs: 3, md: 4 },
              borderRadius: { xs: 3, md: 4 },
              background: 'linear-gradient(135deg, #ffffff, #f8f9fa)',
              border: '1px solid rgba(0,0,0,0.05)',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 2, md: 3 } }}>
              <Lightbulb sx={{ fontSize: { xs: 24, md: 30 }, color: '#ff6b35', mr: 1 }} />
              <Typography 
                variant="h4" 
                fontWeight="bold" 
                sx={{ 
                  color: '#0a2b4a',
                  fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.2rem' },
                }}
              >
                Our Core Values
              </Typography>
            </Box>
            <Divider sx={{ width: { xs: 50, md: 80 }, borderColor: '#ff6b35', borderWidth: 3, mb: { xs: 3, md: 4 } }} />

            <Grid container spacing={{ xs: 2, md: 3 }}>
              {coreValues.map((value, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Grow in timeout={600 + index * 150}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: { xs: 2, md: 3 },
                        textAlign: 'center',
                        borderRadius: 3,
                        height: '100%',
                        border: `2px solid ${value.color}15`,
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        background: `linear-gradient(135deg, ${value.color}08, transparent)`,
                        position: 'relative',
                        overflow: 'hidden',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: `linear-gradient(135deg, ${value.color}10, transparent)`,
                          opacity: 0,
                          transition: 'opacity 0.4s ease',
                        },
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: `0 12px 40px ${value.color}30`,
                          borderColor: value.color,
                          '&::before': {
                            opacity: 1,
                          },
                        },
                      }}
                    >
                      <Box sx={{ position: 'relative', zIndex: 1 }}>
                        <Box 
                          sx={{ 
                            color: value.color, 
                            mb: 1.5,
                            transform: 'scale(1)',
                            transition: 'transform 0.3s ease',
                            '&:hover': {
                              transform: 'scale(1.1) rotate(5deg)',
                            },
                          }}
                        >
                          {value.icon}
                        </Box>
                        <Typography 
                          variant="h6" 
                          fontWeight="bold" 
                          sx={{ 
                            color: '#0a2b4a', 
                            mb: 0.5,
                            fontSize: { xs: '1rem', md: '1.1rem' },
                          }}
                        >
                          {value.title}
                        </Typography>
                        <Typography 
                          variant="body2" 
                          color="textSecondary"
                          sx={{ fontSize: { xs: '0.8rem', md: '0.9rem' } }}
                        >
                          {value.description}
                        </Typography>
                        <Typography 
                          variant="caption" 
                          sx={{ 
                            display: 'block', 
                            mt: 1, 
                            color: value.color,
                            fontWeight: '500',
                            fontSize: { xs: '0.7rem', md: '0.75rem' },
                            opacity: 0.7,
                          }}
                        >
                          {value.details}
                        </Typography>
                      </Box>
                    </Paper>
                  </Grow>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Fade>

        {/* Statistics - Animated Counters */}
        <Fade in timeout={1600}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 2, sm: 3, md: 4 },
              mb: { xs: 3, md: 4 },
              borderRadius: { xs: 3, md: 4 },
              background: 'linear-gradient(135deg, #0a2b4a, #1a4a7a)',
              color: 'white',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: '-50%',
                right: '-20%',
                width: '70%',
                height: '200%',
                background: 'linear-gradient(45deg, transparent 40%, rgba(255,107,53,0.05) 50%, transparent 60%)',
                animation: `${shimmerAnimation} 10s ease-in-out infinite`,
                backgroundSize: '200% 100%',
                transform: 'rotate(10deg)',
                pointerEvents: 'none',
              }}
            />
            
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 2, md: 3 } }}>
                <BarChart sx={{ fontSize: { xs: 24, md: 30 }, color: '#ff6b35', mr: 1 }} />
                <Typography 
                  variant="h4" 
                  fontWeight="bold" 
                  sx={{ 
                    color: 'white',
                    fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.2rem' },
                  }}
                >
                  Our Impact in Numbers
                </Typography>
              </Box>
              <Divider sx={{ width: { xs: 50, md: 80 }, borderColor: '#ff6b35', borderWidth: 3, mb: { xs: 3, md: 4 } }} />

              <Grid container spacing={{ xs: 2, md: 3 }}>
                {[
                  { id: 'years', icon: <Timeline />, label: 'Years of Excellence', suffix: '+' },
                  { id: 'countries', icon: <Public />, label: 'Countries Served', suffix: '+' },
                  { id: 'employees', icon: <People />, label: 'Dedicated Employees', suffix: '+' },
                  { id: 'products', icon: <CheckCircle />, label: 'Products Delivered', suffix: '+' },
                  { id: 'satisfaction', icon: <ThumbUp />, label: 'Client Satisfaction', suffix: '%' },
                  { id: 'partners', icon: <Business />, label: 'Global Partners', suffix: '+' },
                ].map((stat, index) => (
                  <Grid item xs={6} md={4} key={index}>
                    <Grow in timeout={300 + index * 150}>
                      <Paper
                        elevation={0}
                        sx={{
                          p: { xs: 2, md: 3 },
                          textAlign: 'center',
                          borderRadius: 3,
                          backgroundColor: 'rgba(255,255,255,0.05)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            transform: 'scale(1.03)',
                            borderColor: 'rgba(255,107,53,0.3)',
                          },
                        }}
                      >
                        <Box sx={{ color: '#ff6b35', mb: 0.5, fontSize: { xs: 28, md: 36 } }}>
                          {stat.icon}
                        </Box>
                        <Typography 
                          variant="h4" 
                          fontWeight="bold" 
                          sx={{ 
                            color: '#ff6b35',
                            fontSize: { xs: '1.5rem', md: '2.2rem' },
                            animation: `${countUp} 1s ease-out ${index * 0.1}s both`,
                          }}
                        >
                          {counts[stat.id] || 0}{stat.suffix}
                        </Typography>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            color: 'rgba(255,255,255,0.7)',
                            fontSize: { xs: '0.7rem', md: '0.85rem' },
                            fontWeight: '500',
                          }}
                        >
                          {stat.label}
                        </Typography>
                      </Paper>
                    </Grow>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Paper>
        </Fade>

        {/* Certifications - Enhanced */}
        <Fade in timeout={1800}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 2, sm: 3, md: 4 },
              mb: { xs: 3, md: 4 },
              borderRadius: { xs: 3, md: 4 },
              background: 'linear-gradient(135deg, #ffffff, #fafafa)',
              border: '1px solid rgba(0,0,0,0.05)',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 2, md: 3 } }}>
              <Verified sx={{ fontSize: { xs: 24, md: 30 }, color: '#ff6b35', mr: 1 }} />
              <Typography 
                variant="h4" 
                fontWeight="bold" 
                sx={{ 
                  color: '#0a2b4a',
                  fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.2rem' },
                }}
              >
                Certifications & Accreditations
              </Typography>
            </Box>
            <Divider sx={{ width: { xs: 50, md: 80 }, borderColor: '#ff6b35', borderWidth: 3, mb: { xs: 3, md: 4 } }} />

            <Grid container spacing={{ xs: 1.5, md: 2 }}>
              {[
                { name: 'ISO 9001:2015 Quality Management', icon: <Assessment />, color: '#4caf50' },
                { name: 'ISO 14001:2015 Environmental Management', icon: <Recycling />, color: '#2196f3' },
                { name: 'OHSAS 18001:2007 Health & Safety', icon: <Shield />, color: '#ff9800' },
                { name: 'WRAP Certified', icon: <Star />, color: '#9c27b0' },
                { name: 'GOTS Certified', icon: <Forest />, color: '#4caf50' },
                { name: 'OEKO-TEX Standard 100', icon: <CheckCircle />, color: '#00bcd4' },
                { name: 'SA8000 Social Accountability', icon: <Gavel />, color: '#e91e63' },
                { name: 'Higg Index Verified', icon: <Assessment />, color: '#3f51b5' },
              ].map((cert, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Slide direction="up" in timeout={400 + index * 100}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        p: { xs: 1.5, md: 2 },
                        borderRadius: 2,
                        backgroundColor: '#f8f9fa',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        border: '1px solid transparent',
                        '&:hover': {
                          backgroundColor: 'white',
                          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                          transform: 'translateX(8px)',
                          borderColor: cert.color,
                        },
                      }}
                    >
                      <Box 
                        sx={{ 
                          color: cert.color, 
                          mr: 1.5,
                          '& svg': {
                            fontSize: { xs: 20, md: 24 },
                          }
                        }}
                      >
                        {cert.icon}
                      </Box>
                      <Typography 
                        variant="body2" 
                        fontWeight="500"
                        sx={{ 
                          fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.9rem' },
                          flex: 1,
                        }}
                      >
                        {cert.name}
                      </Typography>
                    </Box>
                  </Slide>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Fade>

        {/* Global Presence - Enhanced */}
        <Fade in timeout={2000}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 2, sm: 3, md: 4 },
              mb: { xs: 3, md: 4 },
              borderRadius: { xs: 3, md: 4 },
              background: 'linear-gradient(135deg, #0a2b4a, #1a4a7a)',
              color: 'white',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: '-30%',
                left: '-10%',
                width: '50%',
                height: '150%',
                background: 'radial-gradient(circle, rgba(255,107,53,0.05) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />
            
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 2, md: 3 } }}>
                <Public sx={{ fontSize: { xs: 24, md: 30 }, color: '#ff6b35', mr: 1 }} />
                <Typography 
                  variant="h4" 
                  fontWeight="bold" 
                  sx={{ 
                    color: 'white',
                    fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.2rem' },
                  }}
                >
                  Global Presence
                </Typography>
              </Box>
              <Divider sx={{ width: { xs: 50, md: 80 }, borderColor: '#ff6b35', borderWidth: 3, mb: { xs: 3, md: 4 } }} />

              <Grid container spacing={{ xs: 2, md: 3 }}>
                <Grid item xs={12} md={6}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: { xs: 2, md: 3 },
                      borderRadius: 3,
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      height: '100%',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.08)',
                        transform: 'translateY(-4px)',
                      },
                    }}
                  >
                    <Typography 
                      variant="h6" 
                      gutterBottom 
                      fontWeight="bold" 
                      sx={{ 
                        color: '#ff6b35',
                        fontSize: { xs: '1rem', md: '1.1rem' },
                      }}
                    >
                      Export Markets
                    </Typography>
                    <List>
                      <ListItem>
                        <ListItemIcon>
                          <Public sx={{ color: '#ff6b35' }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary="50+ Countries Worldwide"
                          secondary="Europe, North America, Asia, and Australia"
                          primaryTypographyProps={{ fontWeight: 'bold', fontSize: { xs: '0.9rem', md: '1rem' } }}
                          secondaryTypographyProps={{ fontSize: { xs: '0.75rem', md: '0.85rem' } }}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <LocationOn sx={{ color: '#ff6b35' }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary="Global Headquarters"
                          secondary="Dhaka, Bangladesh"
                          primaryTypographyProps={{ fontWeight: 'bold', fontSize: { xs: '0.9rem', md: '1rem' } }}
                          secondaryTypographyProps={{ fontSize: { xs: '0.75rem', md: '0.85rem' } }}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <Business sx={{ color: '#ff6b35' }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary="International Offices"
                          secondary="UK, USA, UAE, and Singapore"
                          primaryTypographyProps={{ fontWeight: 'bold', fontSize: { xs: '0.9rem', md: '1rem' } }}
                          secondaryTypographyProps={{ fontSize: { xs: '0.75rem', md: '0.85rem' } }}
                        />
                      </ListItem>
                    </List>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: { xs: 2, md: 3 },
                      borderRadius: 3,
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      height: '100%',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.08)',
                        transform: 'translateY(-4px)',
                      },
                    }}
                  >
                    <Typography 
                      variant="h6" 
                      gutterBottom 
                      fontWeight="bold" 
                      sx={{ 
                        color: '#ff6b35',
                        fontSize: { xs: '1rem', md: '1.1rem' },
                      }}
                    >
                      Connect With Us
                    </Typography>
                    <List>
                      <ListItem>
                        <ListItemIcon>
                          <Phone sx={{ color: '#ff6b35' }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary="Phone"
                          secondary="+880 1234 567890"
                          primaryTypographyProps={{ fontWeight: 'bold', fontSize: { xs: '0.9rem', md: '1rem' } }}
                          secondaryTypographyProps={{ fontSize: { xs: '0.75rem', md: '0.85rem' } }}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <Email sx={{ color: '#ff6b35' }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary="Email"
                          secondary="info@wapparels.com"
                          primaryTypographyProps={{ fontWeight: 'bold', fontSize: { xs: '0.9rem', md: '1rem' } }}
                          secondaryTypographyProps={{ fontSize: { xs: '0.75rem', md: '0.85rem' } }}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <LocationOn sx={{ color: '#ff6b35' }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary="Address"
                          secondary="123, Garment Industry Zone, Dhaka, Bangladesh"
                          primaryTypographyProps={{ fontWeight: 'bold', fontSize: { xs: '0.9rem', md: '1rem' } }}
                          secondaryTypographyProps={{ fontSize: { xs: '0.75rem', md: '0.85rem' } }}
                        />
                      </ListItem>
                    </List>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Fade>

        {/* Download Section - Enhanced */}
        <Fade in timeout={2200}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, sm: 4, md: 5 },
              borderRadius: { xs: 3, md: 4 },
              background: 'linear-gradient(135deg, #ffffff, #f8f9fa)',
              border: '1px solid rgba(0,0,0,0.05)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: -100,
                right: -100,
                width: 300,
                height: 300,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255,107,53,0.05) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: -100,
                left: -100,
                width: 300,
                height: 300,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(10,43,74,0.05) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />

            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <RocketLaunch sx={{ fontSize: { xs: 40, md: 60 }, color: '#ff6b35', mb: 2 }} />
              <Typography 
                variant="h4" 
                gutterBottom 
                fontWeight="bold" 
                sx={{ 
                  color: '#0a2b4a',
                  fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.2rem' },
                }}
              >
                Want to Know More?
              </Typography>
              <Typography 
                variant="body1" 
                color="textSecondary" 
                sx={{ 
                  mb: { xs: 2, md: 3 },
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  maxWidth: 600,
                  mx: 'auto',
                }}
              >
                Download our corporate profile to learn more about our capabilities, 
                services, and how we can partner with you.
              </Typography>

              <Stack 
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1.5, sm: 2 }}
                justifyContent="center"
                alignItems="center"
                sx={{ flexWrap: 'wrap' }}
              >
                <Tooltip title="Download as TXT file">
                  <Button
                    variant="contained"
                    startIcon={<Download />}
                    onClick={handleDownloadBrochure}
                    sx={{
                      px: { xs: 3, md: 4 },
                      py: { xs: 1.2, md: 1.5 },
                      borderRadius: '50px',
                      background: 'linear-gradient(135deg, #ff6b35, #ff4500)',
                      color: 'white',
                      fontWeight: 'bold',
                      minWidth: { xs: '100%', sm: 'auto' },
                      '&:hover': {
                        transform: 'translateY(-3px) scale(1.02)',
                        boxShadow: '0 12px 40px rgba(255,107,53,0.4)',
                      },
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    <Download sx={{ mr: 1 }} />
                    Download Brochure
                  </Button>
                </Tooltip>

                <Tooltip title="Save as PDF (Print)">
                  <Button
                    variant="outlined"
                    startIcon={<Download />}
                    onClick={handleDownloadPDF}
                    sx={{
                      px: { xs: 3, md: 4 },
                      py: { xs: 1.2, md: 1.5 },
                      borderRadius: '50px',
                      borderColor: '#ff6b35',
                      color: '#ff6b35',
                      fontWeight: 'bold',
                      minWidth: { xs: '100%', sm: 'auto' },
                      '&:hover': {
                        borderColor: '#ff4500',
                        backgroundColor: 'rgba(255,107,53,0.08)',
                        transform: 'translateY(-3px)',
                        boxShadow: '0 8px 25px rgba(255,107,53,0.2)',
                      },
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    Save as PDF
                  </Button>
                </Tooltip>
              </Stack>

              {/* Social Media Links */}
              <Box sx={{ mt: { xs: 3, md: 4 } }}>
                <Divider sx={{ mb: { xs: 2, md: 3 } }} />
                <Typography 
                  variant="body2" 
                  color="textSecondary" 
                  sx={{ mb: 2, fontSize: { xs: '0.8rem', md: '0.9rem' } }}
                >
                  Follow us on social media
                </Typography>
                <Stack 
                  direction="row" 
                  spacing={{ xs: 1, md: 2 }}
                  justifyContent="center"
                  sx={{ flexWrap: 'wrap' }}
                >
                  {[
                    { icon: <Facebook />, color: '#1877f2', label: 'Facebook' },
                    { icon: <Twitter />, color: '#1da1f2', label: 'Twitter' },
                    { icon: <LinkedIn />, color: '#0a66c2', label: 'LinkedIn' },
                    { icon: <Instagram />, color: '#e4405f', label: 'Instagram' },
                    { icon: <YouTube />, color: '#ff0000', label: 'YouTube' },
                    { icon: <WhatsApp />, color: '#25d366', label: 'WhatsApp' },
                  ].map((social, index) => (
                    <Tooltip title={social.label} key={index}>
                      <IconButton
                        sx={{
                          color: social.color,
                          border: '2px solid',
                          borderColor: `${social.color}30`,
                          '&:hover': {
                            backgroundColor: `${social.color}10`,
                            transform: 'scale(1.1) rotate(5deg)',
                            borderColor: social.color,
                          },
                          transition: 'all 0.3s ease',
                          width: { xs: 40, md: 48 },
                          height: { xs: 40, md: 48 },
                        }}
                      >
                        {social.icon}
                      </IconButton>
                    </Tooltip>
                  ))}
                </Stack>
              </Box>
            </Box>
          </Paper>
        </Fade>

        {/* Footer Note */}
        <Box 
          sx={{ 
            mt: { xs: 3, md: 4 }, 
            textAlign: 'center', 
            color: 'text.secondary',
            fontSize: { xs: '0.7rem', md: '0.85rem' },
          }}
        >
          <Typography variant="caption">
            © {new Date().getFullYear()} W. Apparels Ltd. All rights reserved. | 
            Built with ❤️ in Bangladesh
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default CompanyDetailsPage;