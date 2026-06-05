// ValuesSection.js
import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  alpha,
  useTheme,
  useMediaQuery,
  Fade,
  Button,
  Chip,
  Dialog,
  DialogContent,
  DialogActions,
  IconButton
} from '@mui/material';
import {
  Engineering,
  Architecture,
  Construction,
  Group,
  Schedule,
  EmojiEvents,
  CheckCircle,
  Close,
  ExpandMore
} from '@mui/icons-material';
import { keyframes } from '@emotion/react';

// Animation for floating elements
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
`;

const ValuesSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isVisible, setIsVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const values = [
    {
      title: 'Quality Excellence',
      description: 'We never compromise on quality. From materials to craftsmanship.',
      fullDescription: 'Our commitment to quality excellence means we meticulously select materials, employ skilled craftsmen, and implement rigorous quality control processes. We believe that exceptional quality is the foundation of lasting structures and satisfied clients.',
      icon: <Engineering sx={{ fontSize: 40 }} />,
      color: theme.palette.primary.main,
      features: ['Premium materials', 'Skilled craftsmanship', 'Rigorous inspections', 'Quality assurance', 'Long-lasting results'],
      stats: '98% client satisfaction on quality'
    },
    {
      title: 'Innovation & Technology',
      description: 'We embrace new technologies and methods to deliver efficient.',
      fullDescription: 'Innovation drives our approach to construction. We continuously invest in the latest technologies, from BIM modeling to advanced project management software and sustainable building practices.',
      icon: <Architecture sx={{ fontSize: 40 }} />,
      color: theme.palette.secondary.main,
      features: ['BIM technology', 'Sustainable practices', 'Advanced software', 'Eco-friendly materials', 'Future-proof designs'],
      stats: '30% faster project completion with our tech'
    },
    {
      title: 'Integrity & Transparency',
      description: 'We believe in transparency, honesty, and doing what\'s right.',
      fullDescription: 'Integrity is the cornerstone of our business. We maintain open communication, provide detailed cost breakdowns, and honor our commitments. Our transparent processes ensure clients are informed at every stage.',
      icon: <Construction sx={{ fontSize: 40 }} />,
      color: theme.palette.success.main,
      features: ['Open communication', 'Detailed reporting', 'Ethical practices', 'Community focus', 'Accountability'],
      stats: '95% of clients return for additional projects'
    },
    {
      title: 'Client Collaboration',
      description: 'We work closely with our clients, involving them in every decision.',
      fullDescription: 'We believe the best results come from true collaboration. Our process involves clients at every stage, from initial concept to final walkthrough. We listen carefully to your needs and provide expert guidance.',
      icon: <Group sx={{ fontSize: 40 }} />,
      color: theme.palette.info.main,
      features: ['Regular updates', 'Collaborative decisions', 'Custom solutions', 'Responsive communication', 'Vision alignment'],
      stats: '100+ projects completed through collaboration'
    },
    {
      title: 'Timely Delivery',
      description: 'We respect your time and commit to completing projects on schedule.',
      fullDescription: 'We understand that time is valuable. Our meticulous planning, efficient processes, and experienced project management ensure your project stays on track. We proactively identify potential delays.',
      icon: <Schedule sx={{ fontSize: 40 }} />,
      color: theme.palette.warning.main,
      features: ['Detailed scheduling', 'Proactive management', 'Efficient processes', 'Delay mitigation', 'Time respect'],
      stats: '92% of projects completed on or ahead of schedule'
    },
    {
      title: 'Continuous Improvement',
      description: 'We constantly evolve our practices, learn from each project.',
      fullDescription: 'The construction industry is always advancing, and so are we. We systematically review each project to identify improvements, invest in ongoing training, and stay current with industry developments.',
      icon: <EmojiEvents sx={{ fontSize: 40 }} />,
      color: theme.palette.error.main,
      features: ['Project reviews', 'Team training', 'Process optimization', 'Industry research', 'Excellence pursuit'],
      stats: '15% annual improvement in efficiency'
    }
  ];

  const handleValueClick = (value) => {
    setSelectedValue(value);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };


  return (
    <>
      <Box sx={{ 
        py: 8,
        background: `linear-gradient(135deg, ${alpha(theme.palette.background.default, 0.8)} 0%, ${alpha(theme.palette.grey[100], 0.6)} 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip 
              label="OUR VALUES" 
              color="primary" 
              variant="outlined"
              sx={{ 
                mb: 2, 
                px: 2,
                fontWeight: 'bold',
                background: alpha(theme.palette.primary.main, 0.1),
                fontSize: '0.9rem'
              }} 
            />
            <Typography 
              variant="h4"
              fontWeight="bold" 
              gutterBottom
              sx={{
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                backgroundClip: 'text',
                textFillColor: 'transparent',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' }
              }}
            >
              The Foundation of Our Excellence
            </Typography>
            <Typography 
              variant="body1" 
              color="text.secondary" 
              sx={{ 
                maxWidth: 700, 
                mx: 'auto', 
                mt: 2,
                fontSize: { xs: '0.9rem', md: '1rem' }
              }}
            >
              These core principles guide every decision we make and every project we undertake.
            </Typography>
          </Box>
          
          <Grid container spacing={3}>
            {values.map((value, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Fade in={isVisible} timeout={800} style={{ transitionDelay: `${index * 100}ms` }}>
                  <Card 
                    sx={{ 
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                      p: 3,
                      borderRadius: 3,
                      transition: 'all 0.3s ease',
                      boxShadow: `0 4px 20px ${alpha(theme.palette.common.black, 0.08)}`,
                      background: theme.palette.background.paper,
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: `0 12px 30px ${alpha(value.color, 0.15)}`,
                        '& .value-icon': {
                          transform: 'scale(1.1)',
                          color: value.color,
                        },
                      },
                    }}
                  >
                    {/* Icon */}
                    <Box
                      className="value-icon"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        bgcolor: alpha(value.color, 0.1),
                        color: value.color,
                        mb: 2,
                        mx: 'auto',
                        transition: 'all 0.3s ease',
                        animation: `${float} 4s ease-in-out infinite`,
                        animationDelay: `${index * 0.5}s`,
                      }}
                    >
                      {value.icon}
                    </Box>
                    
                    {/* Title */}
                    <Typography 
                      variant="h6" 
                      fontWeight="bold" 
                      gutterBottom 
                      align="center"
                      sx={{ 
                        minHeight: { xs: 'auto', md: '64px' },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {value.title}
                    </Typography>
                    
                    {/* Description */}
                    <Typography 
                      variant="body2" 
                      color="text.secondary" 
                      sx={{ 
                        mb: 2, 
                        lineHeight: 1.6,
                        flexGrow: 1,
                        textAlign: 'center'
                      }}
                    >
                      {value.description}
                    </Typography>
                    
                    {/* Features (only show 2 on mobile) */}
                    <Box sx={{ 
                      mb: 2, 
                      display: 'flex', 
                      flexWrap: 'wrap', 
                      gap: 0.5, 
                      justifyContent: 'center' 
                    }}>
                      {value.features.slice(0, isMobile ? 2 : 3).map((feature, i) => (
                        <Chip
                          key={i}
                          icon={<CheckCircle sx={{ fontSize: 14 }} />}
                          label={feature}
                          size="small"
                          variant="outlined"
                          sx={{ 
                            fontSize: '0.65rem',
                            background: alpha(value.color, 0.05),
                            borderColor: alpha(value.color, 0.2),
                            color: 'text.primary',
                            mb: 0.5,
                            height: 24
                          }}
                        />
                      ))}
                    </Box>
                    
                    {/* Learn More Button */}
                    <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'center' }}>
                      <Button
                        variant="outlined"
                        size="small"
                        endIcon={<ExpandMore />}
                        onClick={() => handleValueClick(value)}
                        sx={{
                          borderRadius: 2,
                          borderWidth: 1.5,
                          borderColor: alpha(value.color, 0.5),
                          color: value.color,
                          px: 2,
                          py: 0.5,
                          fontSize: '0.8rem',
                          '&:hover': {
                            borderColor: value.color,
                            bgcolor: alpha(value.color, 0.05),
                          }
                        }}
                      >
                        Learn More
                      </Button>
                    </Box>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Value Detail Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 3,
            background: theme.palette.background.paper,
          }
        }}
      >
        {selectedValue && (
          <>
            <DialogContent sx={{ p: 0 }}>
              <Box 
                sx={{ 
                  height: 100,
                  background: `linear-gradient(45deg, ${selectedValue.color}, ${alpha(selectedValue.color, 0.7)})`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  position: 'relative'
                }}
              >
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 60,
                  height: 60,
                  borderRadius: '50%',
                  bgcolor: alpha(theme.palette.common.white, 0.2),
                  color: 'white',
                  mr: 2
                }}>
                  {selectedValue.icon}
                </Box>
                <Typography variant="h5" fontWeight="bold">
                  {selectedValue.title}
                </Typography>
                
                <IconButton
                  aria-label="close"
                  onClick={handleCloseDialog}
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    color: 'white',
                    bgcolor: alpha(theme.palette.common.black, 0.2),
                    '&:hover': {
                      bgcolor: alpha(theme.palette.common.black, 0.3),
                    }
                  }}
                >
                  <Close />
                </IconButton>
              </Box>
              
              <Box sx={{ p: 3 }}>
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.7 }}>
                  {selectedValue.fullDescription}
                </Typography>
                
                <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
                  Key Features:
                </Typography>
                <Box sx={{ mb: 3 }}>
                  {selectedValue.features.map((feature, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                      <CheckCircle sx={{ color: selectedValue.color, mr: 1.5, fontSize: 20 }} />
                      <Typography variant="body1">{feature}</Typography>
                    </Box>
                  ))}
                </Box>
                
                <Box 
                  sx={{ 
                    p: 2, 
                    background: alpha(selectedValue.color, 0.05),
                    borderLeft: `4px solid ${selectedValue.color}`,
                    borderRadius: 2
                  }}
                >
                  <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                    "{selectedValue.stats}"
                  </Typography>
                </Box>
              </Box>
            </DialogContent>
            <DialogActions sx={{ p: 2 }}>
              <Button 
                onClick={handleCloseDialog}
                sx={{ mr: 1 }}
              >
                Close
              </Button>
              <Button 
                variant="contained"
                sx={{
                  background: `linear-gradient(45deg, ${selectedValue.color}, ${alpha(selectedValue.color, 0.7)})`,
                  '&:hover': {
                    background: `linear-gradient(45deg, ${selectedValue.color}, ${alpha(selectedValue.color, 0.9)})`,
                  }
                }}
              >
                Learn How We Implement This
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </>
  );
};

export default ValuesSection;