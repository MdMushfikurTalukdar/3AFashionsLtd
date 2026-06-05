// pages/Services.js
import { useState, useEffect } from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  alpha,
  useTheme,
  Fade,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import {
  CheckCircle,
  Close,
  Engineering,
  BusinessCenter,
  HomeRepairService,
  DesignServices,
  Schedule,
  Nature,
  ArrowForward
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { keyframes } from '@emotion/react';

// Animation for gradient background
const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Services = () => {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: 'Residential Construction',
      description: 'We build beautiful, durable homes tailored to your needs and preferences.',
      fullDescription: 'Our residential construction service encompasses everything from custom home building to planned community developments. We work closely with you to create living spaces that reflect your lifestyle while ensuring structural integrity, energy efficiency, and timeless design.',
      features: [
        'Custom home building',
        'Home additions and expansions',
        'Quality materials selection',
        'Energy-efficient solutions',
        'Project management',
        '5-year structural warranty'
      ],
      image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      icon: <Engineering sx={{ fontSize: 30 }} />,
      color: theme.palette.primary.main,
      stats: { projects: 150, years: 15 }
    },
    {
      title: 'Commercial Construction',
      description: 'From offices to retail spaces, we deliver commercial buildings that impress.',
      fullDescription: 'Our commercial construction expertise includes office buildings, retail spaces, hospitality venues, and industrial facilities. We understand the unique requirements of commercial projects, including compliance with regulations, functionality for business operations, and creating spaces that enhance brand identity.',
      features: [
        'Office buildings',
        'Retail spaces',
        'Restaurants and hospitality',
        'Industrial facilities',
        'Tenant improvements',
        'LEED certification'
      ],
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      icon: <BusinessCenter sx={{ fontSize: 30 }} />,
      color: theme.palette.secondary.main,
      stats: { projects: 85, years: 12 }
    },
    {
      title: 'Renovation & Remodeling',
      description: 'Transform your existing space with our expert renovation services.',
      fullDescription: 'Our renovation and remodeling services breathe new life into existing structures. Whether you\'re updating a single room or undertaking a whole-house transformation, we combine creative design solutions with practical construction expertise.',
      features: [
        'Kitchen and bathroom remodels',
        'Whole-house renovations',
        'Historic restorations',
        'Accessibility modifications',
        'Space optimization',
        'Cost-effective solutions'
      ],
      image: 'https://i.ibb.co.com/8nDQnKWj/Renovation-Remodeling.jpg',
      icon: <HomeRepairService sx={{ fontSize: 30 }} />,
      color: theme.palette.success.main,
      stats: { projects: 200, years: 18 }
    },
    {
      title: 'Design & Planning',
      description: 'Comprehensive design services to bring your vision to life.',
      fullDescription: 'Our design and planning services help transform your ideas into actionable blueprints. We combine aesthetic vision with practical considerations to create spaces that are both beautiful and functional.',
      features: [
        'Architectural design',
        'Space planning',
        '3D modeling and visualization',
        'Permitting assistance',
        'Budget planning',
        'Material selection guidance'
      ],
      image: 'https://i.ibb.co.com/7JLwJcdF/Design-Planning.jpg',
      icon: <DesignServices sx={{ fontSize: 30 }} />,
      color: theme.palette.info.main,
      stats: { projects: 120, years: 10 }
    },
    {
      title: 'Project Management',
      description: 'Professional oversight to keep your project on time and on budget.',
      fullDescription: 'Our project management service provides comprehensive oversight for your construction project. We handle scheduling, budgeting, subcontractor coordination, and quality control to ensure your project progresses smoothly.',
      features: [
        'Timeline development',
        'Budget management',
        'Contractor coordination',
        'Quality control',
        'Regular progress reports',
        'Risk mitigation'
      ],
      image: 'https://i.ibb.co.com/YBq6Hv83/Project-Management.jpg',
      icon: <Schedule sx={{ fontSize: 30 }} />,
      color: theme.palette.warning.main,
      stats: { projects: 180, years: 14 }
    },
    {
      title: 'Sustainable Building',
      description: 'Eco-friendly construction solutions for a greener future.',
      fullDescription: 'Our sustainable building practices focus on reducing environmental impact while creating healthy, efficient spaces. We incorporate green technologies, sustainable materials, and energy-efficient systems into all our projects.',
      features: [
        'LEED certification consulting',
        'Energy-efficient systems',
        'Sustainable material sourcing',
        'Solar installation',
        'Green building techniques',
        'Water conservation systems'
      ],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      icon: <Nature sx={{ fontSize: 30 }} />,
      color: theme.palette.error.main,
      stats: { projects: 75, years: 8 }
    },
  ];

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          pt: 15,
          pb: 10,
          background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(theme.palette.secondary.main, 0.1)} 100%)`,
          position: 'relative',
          overflow: 'hidden',
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
          }
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
            <Box 
              sx={{ 
                mb: 3, 
                px: 2,
                py: 1,
                display: 'inline-block',
                fontWeight: 'bold',
                background: alpha(theme.palette.primary.main, 0.1),
                border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
                borderRadius: 2,
                color: theme.palette.primary.main,
                fontSize: '0.9rem'
              }} 
            >
              OUR SERVICES
            </Box>
            <Typography
              variant="h2"
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
              Comprehensive Construction Solutions
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
              From concept to completion, we deliver exceptional construction services tailored to your unique needs and vision.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Services Grid */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Fade in={isVisible} timeout={800} style={{ transitionDelay: `${index * 100}ms` }}>
                <Card 
                  sx={{ 
                    height: '100%',
                    borderRadius: 4,
                    transition: 'all 0.4s ease',
                    boxShadow: `0 8px 32px ${alpha(theme.palette.common.black, 0.08)}`,
                    background: theme.palette.background.paper,
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 20px 40px ${alpha(service.color, 0.15)}`,
                      '& .service-image': {
                        transform: 'scale(1.05)',
                      }
                    },
                  }}
                >
                  {/* Image Container */}
                  <Box sx={{ 
                    height: 220, 
                    overflow: 'hidden',
                    position: 'relative'
                  }}>
                    <Box
                      className="service-image"
                      component="img"
                      src={service.image}
                      alt={service.title}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `linear-gradient(to bottom, transparent 40%, ${theme.palette.background.paper} 100%)`,
                      }}
                    />
                    
                    {/* Icon overlay */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        left: 16,
                        width: 50,
                        height: 50,
                        borderRadius: '50%',
                        background: alpha(service.color, 0.9),
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: `0 4px 12px ${alpha(service.color, 0.3)}`,
                      }}
                    >
                      {service.icon}
                    </Box>
                  </Box>
                  
                  <Box sx={{ p: 3 }}>
                    {/* Title */}
                    <Typography 
                      variant="h5" 
                      fontWeight="bold" 
                      gutterBottom 
                      sx={{ 
                        minHeight: { xs: 'auto', md: '72px' },
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      {service.title}
                    </Typography>
                    
                    {/* Description */}
                    <Typography 
                      variant="body2" 
                      color="text.secondary" 
                      sx={{ 
                        mb: 2, 
                        lineHeight: 1.6,
                        minHeight: { xs: 'auto', md: '72px' }
                      }}
                    >
                      {service.description}
                    </Typography>
                    
                    {/* Features (show only 3) */}
                    <List dense sx={{ mb: 2 }}>
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <ListItem key={idx} disableGutters sx={{ py: 0.2 }}>
                          <ListItemIcon sx={{ minWidth: 30, color: service.color }}>
                            <CheckCircle fontSize="small" />
                          </ListItemIcon>
                          <ListItemText 
                            primary={feature} 
                            primaryTypographyProps={{ variant: 'body2' }}
                          />
                        </ListItem>
                      ))}
                    </List>
                    
                    {/* CTA Button */}
                    <Box>
                      <Button
                        variant="contained"
                        fullWidth
                        endIcon={<ArrowForward />}
                        onClick={() => handleServiceClick(service)}
                        sx={{
                          background: `linear-gradient(45deg, ${service.color}, ${alpha(service.color, 0.7)})`,
                          borderRadius: 2,
                          py: 1,
                          '&:hover': {
                            background: `linear-gradient(45deg, ${service.color}, ${alpha(service.color, 0.9)})`,
                          }
                        }}
                      >
                        Learn More
                      </Button>
                    </Box>
                  </Box>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box sx={{ 
        py: 10,
        background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`,
        backgroundSize: '200% 200%',
        animation: `${gradient} 8s ease infinite`,
        color: 'white',
      }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              Don't See What You Need?
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.9, mb: 4, maxWidth: 600, mx: 'auto' }}>
              We offer custom solutions for unique projects. Contact us to discuss how we can help with your specific construction needs.
            </Typography>
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/contact"
              endIcon={<ArrowForward />}
              sx={{
                background: `linear-gradient(45deg, ${alpha(theme.palette.common.white, 0.2)}, ${alpha(theme.palette.common.white, 0.1)})`,
                borderRadius: 3,
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                backdropFilter: 'blur(10px)',
                border: `1px solid ${alpha(theme.palette.common.white, 0.2)}`,
                '&:hover': {
                  background: `linear-gradient(45deg, ${alpha(theme.palette.common.white, 0.3)}, ${alpha(theme.palette.common.white, 0.2)})`,
                }
              }}
            >
              Get a Custom Quote
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Service Detail Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 4,
            background: theme.palette.background.paper,
          }
        }}
      >
        {selectedService && (
          <>
            <DialogContent sx={{ p: 0 }}>
              <Box 
                sx={{ 
                  height: 200,
                  background: `linear-gradient(45deg, ${selectedService.color}, ${alpha(selectedService.color, 0.7)})`,
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
                  width: 70,
                  height: 70,
                  borderRadius: '50%',
                  bgcolor: alpha(theme.palette.common.white, 0.2),
                  color: 'white',
                  mr: 2
                }}>
                  {selectedService.icon}
                </Box>
                <Typography variant="h3" fontWeight="bold">
                  {selectedService.title}
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
              
              <Box sx={{ p: 4 }}>
                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                  {selectedService.fullDescription}
                </Typography>
                
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Service Features:
                </Typography>
                <Grid container spacing={2} sx={{ mb: 3 }}>
                  {selectedService.features.map((feature, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <CheckCircle sx={{ color: selectedService.color, mr: 1.5 }} />
                        <Typography variant="body1">{feature}</Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
                
                <Box sx={{ 
                  p: 3, 
                  background: alpha(selectedService.color, 0.05),
                  borderRadius: 3,
                  display: 'flex',
                  justifyContent: 'space-around',
                  textAlign: 'center'
                }}>
                  <Box>
                    <Typography variant="h4" fontWeight="bold" color={selectedService.color}>
                      {selectedService.stats.projects}+
                    </Typography>
                    <Typography variant="body2">
                      Projects Completed
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h4" fontWeight="bold" color={selectedService.color}>
                      {selectedService.stats.years}+
                    </Typography>
                    <Typography variant="body2">
                      Years Experience
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </DialogContent>
            <DialogActions sx={{ p: 3 }}>
              <Button 
                onClick={handleCloseDialog}
                sx={{ mr: 2 }}
              >
                Close
              </Button>
              <Button 
                variant="contained"
                component={Link}
                to="/contact"
                sx={{
                  background: `linear-gradient(45deg, ${selectedService.color}, ${alpha(selectedService.color, 0.7)})`,
                  '&:hover': {
                    background: `linear-gradient(45deg, ${selectedService.color}, ${alpha(selectedService.color, 0.9)})`,
                  }
                }}
              >
                Request This Service
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </>
  );
};

export default Services;