// Services Section Component
import { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  useTheme,
  useMediaQuery,
  alpha,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Chip,
  Slide,
  Fade,
} from '@mui/material';
import {
  Close as CloseIcon,
  Engineering as EngineeringIcon,
  Architecture as ArchitectureIcon,
  Construction as ConstructionIcon,
  DesignServices as DesignServicesIcon,
  HomeRepairService as HomeRepairServiceIcon,
  EmojiObjects as InnovationIcon,
  CheckCircle as CheckIcon,
  East as EastIcon,
} from '@mui/icons-material';

// Service data with more details
const services = [
  {
    title: 'Residential Construction',
    description: 'We build beautiful, durable homes tailored to your needs and preferences.',
    fullDescription: 'Our residential construction service encompasses everything from custom home building to planned community developments. We work closely with you to create living spaces that reflect your lifestyle while ensuring structural integrity, energy efficiency, and timeless design. Our team handles everything from initial planning to final finishes.',
    icon: <EngineeringIcon sx={{ fontSize: 40 }} />,
    features: ['Custom home design', 'Quality materials', 'Energy efficient solutions', 'Timely completion', '5-year warranty'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Commercial Projects',
    description: 'From offices to retail spaces, we deliver commercial buildings that impress.',
    fullDescription: 'Our commercial construction expertise includes office buildings, retail spaces, hospitality venues, and industrial facilities. We understand the unique requirements of commercial projects, including compliance with regulations, functionality for business operations, and creating spaces that enhance brand identity and customer experience.',
    icon: <ArchitectureIcon sx={{ fontSize: 40 }} />,
    features: ['Office buildings', 'Retail spaces', 'Hospitality venues', 'Industrial facilities', 'LEED certification options'],
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Renovation & Remodeling',
    description: 'Transform your existing space with our expert renovation services.',
    fullDescription: 'Our renovation and remodeling services breathe new life into existing structures. Whether you\'re updating a single room or undertaking a whole-house transformation, we combine creative design solutions with practical construction expertise. We specialize in maximizing space, improving functionality, and enhancing aesthetics while respecting your budget and timeline.',
    icon: <ConstructionIcon sx={{ fontSize: 40 }} />,
    features: ['Kitchen & bathroom remodels', 'Whole-house renovations', 'Space optimization', 'Historic preservation', 'Cost-effective solutions'],
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Interior Design',
    description: 'Complete interior design services that complement our construction expertise.',
    fullDescription: 'Our interior design team works seamlessly with our construction professionals to create cohesive, beautiful spaces. We consider everything from lighting and acoustics to furniture selection and color schemes, ensuring that your interior spaces are not only aesthetically pleasing but also functional and comfortable for everyday living or working.',
    icon: <DesignServicesIcon sx={{ fontSize: 40 }} />,
    features: ['Space planning', 'Material selection', 'Color consultation', 'Furniture design', 'Lighting solutions'],
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Project Management',
    description: 'Comprehensive project management ensuring your project stays on time and budget.',
    fullDescription: 'Our project management service provides oversight and coordination for your construction project from conception to completion. We handle scheduling, budgeting, subcontractor coordination, and quality control, ensuring that your project progresses smoothly, stays within budget, and meets all quality standards and deadlines.',
    icon: <HomeRepairServiceIcon sx={{ fontSize: 40 }} />,
    features: ['Budget management', 'Timeline coordination', 'Quality control', 'Subcontractor management', 'Regular progress reports'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Innovative Solutions',
    description: 'Cutting-edge construction technologies and sustainable building practices.',
    fullDescription: 'We stay at the forefront of construction innovation, incorporating the latest technologies and sustainable practices into our projects. From smart home integration and energy-efficient systems to eco-friendly materials and building techniques, we help you build for the future while reducing environmental impact and long-term operating costs.',
    icon: <InnovationIcon sx={{ fontSize: 40 }} />,
    features: ['Smart home technology', 'Green building materials', 'Energy efficiency', 'Sustainable practices', 'Future-proof design'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
  },
];

const ServicesSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [selectedService, setSelectedService] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Box
      sx={{
        py: 10,
        background: `linear-gradient(135deg, ${alpha(theme.palette.background.default, 0.9)} 0%, ${alpha(theme.palette.grey[100], 0.7)} 100%)`,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          backgroundImage: `radial-gradient(${alpha(theme.palette.primary.main, 0.1)} 1px, transparent 2px)`,
          backgroundSize: '40px 40px',
          opacity: 0.3,
          zIndex: 0,
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <Fade in timeout={1000}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Chip 
              label="OUR SERVICES" 
              color="primary" 
              variant="outlined"
              sx={{ 
                mb: 2, 
                px: 1, 
                fontWeight: 'bold',
                background: alpha(theme.palette.primary.main, 0.1)
              }} 
            />
            <Typography 
              variant="h2" 
              component="h2" 
              fontWeight="bold" 
              gutterBottom
              sx={{
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
                maxWidth: 700, 
                mx: 'auto',
                mt: 2
              }}
            >
              We offer a full range of construction and design services to bring your vision to life with quality craftsmanship and attention to detail.
            </Typography>
          </Box>
        </Fade>

        {/* Services Grid */}
        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Slide direction="up" in timeout={800} style={{ transitionDelay: `${index * 100}ms` }}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 4,
                    overflow: 'hidden',
                    transition: 'all 0.3s ease-in-out',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                    background: `linear-gradient(145deg, ${theme.palette.background.paper} 0%, ${alpha(theme.palette.background.default, 0.8)} 100%)`,
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 16px 48px ${alpha(theme.palette.primary.main, 0.15)}`,
                      '& .service-image': {
                        transform: 'scale(1.05)',
                      },
                      '& .service-button': {
                        opacity: 1,
                        transform: 'translateY(0)',
                      }
                    },
                  }}
                >
                  {/* Service Image */}
                  <Box sx={{ 
                    height: 200, 
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
                        width: '100%',
                        height: '100%',
                        background: `linear-gradient(to bottom, transparent 0%, ${theme.palette.background.paper} 90%)`,
                        opacity: 0.7,
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        background: alpha(theme.palette.primary.main, 0.9),
                        width: 60,
                        height: 60,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        boxShadow: `0 4px 12px ${alpha(theme.palette.primary.main, 0.3)}`,
                      }}
                    >
                      {service.icon}
                    </Box>
                  </Box>

                  {/* Service Content */}
                  <CardContent sx={{ 
                    flexGrow: 1, 
                    display: 'flex', 
                    flexDirection: 'column',
                    p: 3,
                  }}>
                    <Typography 
                      variant="h5" 
                      component="h3" 
                      fontWeight="bold" 
                      gutterBottom
                      sx={{ 
                        minHeight: 64,
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      color="text.secondary" 
                      sx={{ 
                        mb: 2,
                        flexGrow: 1
                      }}
                    >
                      {service.description}
                    </Typography>
                    
                    {/* Features Chips */}
                    <Box sx={{ mb: 3, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {service.features.slice(0, 3).map((feature, i) => (
                        <Chip
                          key={i}
                          icon={<CheckIcon color="primary" sx={{ fontSize: 16 }} />}
                          label={feature}
                          size="small"
                          variant="outlined"
                          sx={{ 
                            mb: 1, 
                            fontSize: '0.7rem',
                            background: alpha(theme.palette.primary.main, 0.05),
                            borderColor: alpha(theme.palette.primary.main, 0.2),
                          }}
                        />
                      ))}
                    </Box>

                    {/* Action Button */}
                    <Button
                      className="service-button"
                      variant="contained"
                      endIcon={<EastIcon />}
                      fullWidth
                      onClick={() => handleServiceClick(service)}
                      sx={{
                        opacity: isMobile ? 1 : 0,
                        transform: isMobile ? 'translateY(0)' : 'translateY(10px)',
                        transition: 'all 0.3s ease',
                        borderRadius: 2,
                        py: 1.2,
                        background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        '&:hover': {
                          background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                          boxShadow: `0 6px 16px ${alpha(theme.palette.primary.main, 0.4)}`,
                        }
                      }}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Slide>
            </Grid>
          ))}
        </Grid>

        {/* Service Detail Dialog */}
        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          maxWidth="md"
          fullWidth
          scroll="body"
          TransitionComponent={Slide}
          TransitionProps={{ direction: 'up' }}
          PaperProps={{
            sx: {
              borderRadius: 4,
              background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${alpha(theme.palette.background.default, 0.95)} 100%)`,
            }
          }}
        >
          {selectedService && (
            <>
              <DialogTitle sx={{ 
                m: 0, 
                p: 3,
                display: 'flex',
                alignItems: 'center',
                borderBottom: `1px solid ${theme.palette.divider}`
              }}>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  flexGrow: 1
                }}>
                  <Box sx={{ 
                    background: alpha(theme.palette.primary.main, 0.1),
                    borderRadius: 3,
                    p: 1.5,
                    mr: 2,
                    color: theme.palette.primary.main,
                    display: 'flex'
                  }}>
                    {selectedService.icon}
                  </Box>
                  <Typography variant="h5" component="div" fontWeight="bold">
                    {selectedService.title}
                  </Typography>
                </Box>
                <IconButton
                  aria-label="close"
                  onClick={handleCloseDialog}
                  sx={{
                    color: theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent sx={{ p: 0 }}>
                <Box component="img" 
                  src={selectedService.image} 
                  alt={selectedService.title}
                  sx={{ 
                    width: '100%', 
                    height: 250, 
                    objectFit: 'cover' 
                  }} 
                />
                <Box sx={{ p: 3 }}>
                  <Typography variant="body1" paragraph>
                    {selectedService.fullDescription}
                  </Typography>
                  
                  <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
                    Service Features:
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    {selectedService.features.map((feature, index) => (
                      <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                        <CheckIcon color="primary" sx={{ mr: 1.5 }} />
                        <Typography variant="body1">{feature}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </DialogContent>
              <DialogActions sx={{ 
                p: 3, 
                borderTop: `1px solid ${theme.palette.divider}`,
                justifyContent: 'center'
              }}>
                <Button 
                  variant="outlined" 
                  onClick={handleCloseDialog}
                  sx={{ mr: 2, borderRadius: 2 }}
                >
                  Close
                </Button>
                <Button 
                  variant="contained" 
                  endIcon={<EastIcon />}
                  sx={{ 
                    borderRadius: 2,
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    '&:hover': {
                      background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                    }
                  }}
                >
                  Request This Service
                </Button>
              </DialogActions>
            </>
          )}
        </Dialog>
      </Container>
    </Box>
  );
};

export default ServicesSection;