// pages/Projects.js
import { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Chip,
  Tabs,
  Tab,
  Dialog,
  DialogContent,
  IconButton,
  alpha,
  useTheme,
  useMediaQuery,
  Fade,
  Zoom,
  Grow
} from '@mui/material';
import {
  Close,
  ZoomIn,
  CalendarToday,
  LocationOn,
  Construction,
  Home,
  Business,
  Build,
  ArrowForward,
} from '@mui/icons-material';

const Projects = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [value, setValue] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClickOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const projects = [
    {
      title: 'Modern Family Home',
      description: 'A contemporary 4-bedroom home with open living spaces and sustainable features.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
      category: 'residential',
      features: ['Solar panels', 'Open floor plan', 'Energy efficient'],
      year: '2022',
      location: 'Seattle, WA',
      size: '3200 sq ft',
      duration: '12 months',
    },
    {
      title: 'Office Complex',
      description: 'A 5-story commercial building with retail space and underground parking.',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
      category: 'commercial',
      features: ['LEED Certified', 'Smart building technology', 'Green roof'],
      year: '2021',
      location: 'San Francisco, CA',
      size: '85,000 sq ft',
      duration: '18 months',
    },
    {
      title: 'Kitchen Renovation',
      description: 'Complete transformation of a traditional kitchen into a modern culinary space.',
      image: 'https://i.ibb.co.com/ZzNSrLy4/Kitchen-Renovation.jpg',
      category: 'renovation',
      features: ['Custom cabinetry', 'Quartz countertops', 'Smart appliances'],
      year: '2022',
      location: 'Portland, OR',
      size: '350 sq ft',
      duration: '6 weeks',
    },
    {
      title: 'Community Center',
      description: 'A multi-purpose facility for community events and activities.',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
      category: 'commercial',
      features: ['Accessible design', 'Multi-purpose rooms', 'Sustainable materials'],
      year: '2020',
      location: 'Austin, TX',
      size: '25,000 sq ft',
      duration: '14 months',
    },
    // {
    //   title: 'Lakeside Retreat',
    //   description: 'A luxury vacation home with panoramic views of the lake.',
    //   image: 'https://i.ibb.co.com/7JYbF9S5/Lakeside-Retreat.jpg',
    //   category: 'residential',
    //   features: ['Floor-to-ceiling windows', 'Outdoor living space', 'Dock access'],
    //   year: '2021',
    //   location: 'Lake Tahoe, CA',
    //   size: '4500 sq ft',
    //   duration: '16 months',
    // },
    // {
    //   title: 'Historic Restoration',
    //   description: 'Careful restoration of a 19th-century building for modern use.',
    //   image: 'https://i.ibb.co.com/tM7J9nJH/Historic-Restoration.jpg',
    //   category: 'renovation',
    //   features: ['Period-appropriate materials', 'Structural reinforcement', 'Modern utilities'],
    //   year: '2019',
    //   location: 'Boston, MA',
    //   size: '12,000 sq ft',
    //   duration: '24 months',
    // },
  ];

  const filteredProjects = value === 'all' 
    ? projects 
    : projects.filter(project => project.category === value);

  const categoryIcons = {
    all: <Construction />,
    residential: <Home />,
    commercial: <Business />,
    renovation: <Build />,
  };

  return (
    <Box sx={{ overflow: 'hidden', bgcolor: alpha(theme.palette.background.default, 0.4) }}>
      {/* Hero Section */}
      <Box
        sx={{
          pt: 8,
          pb: 6,
          background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
          position: 'relative',
        }}
      >
        <Container maxWidth="lg">
          <Fade in timeout={1000}>
            <Box sx={{ textAlign: 'center' }}>
              <Chip 
                label="PORTFOLIO" 
                sx={{ 
                  mb: 2, 
                  px: 2,
                  py: 1,
                  fontWeight: 'bold',
                  background: alpha(theme.palette.primary.main, 0.1),
                  color: theme.palette.primary.main,
                }} 
              />
              <Typography 
                variant={isMobile ? "h3" : "h2"} 
                fontWeight="bold" 
                gutterBottom
                color="primary"
              >
                Our Projects
              </Typography>
              <Typography 
                variant={isMobile ? "body1" : "h6"} 
                color="text.secondary" 
                paragraph 
                sx={{ 
                  maxWidth: 600, 
                  mx: 'auto', 
                  mb: 4 
                }}
              >
                Discover our exceptional craftsmanship and attention to detail through our completed projects
              </Typography>
            </Box>
          </Fade>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 4, position: 'relative' }}>
        {/* Filter Tabs */}
        <Box sx={{ 
          borderBottom: 1, 
          borderColor: 'divider', 
          mb: 6,
          position: 'sticky',
          top: isMobile ? 56 : 64,
          zIndex: 10,
          backgroundColor: 'background.paper',
          borderRadius: 2,
          py: 1,
          boxShadow: `0 4px 20px ${alpha(theme.palette.common.black, 0.05)}`,
        }}>
          <Tabs
            value={value}
            onChange={handleChange}
            centered={!isMobile}
            variant={isMobile ? "scrollable" : "standard"}
            scrollButtons="auto"
            sx={{
              '& .MuiTab-root': {
                minHeight: 48,
                borderRadius: 2,
                mx: 0.5,
                minWidth: 'auto',
                px: 3,
                '&.Mui-selected': {
                  backgroundColor: alpha(theme.palette.primary.main, 0.1),
                  color: theme.palette.primary.main,
                }
              }
            }}
          >
            <Tab icon={categoryIcons.all} iconPosition="start" label="All Projects" value="all" />
            <Tab icon={categoryIcons.residential} iconPosition="start" label="Residential" value="residential" />
            <Tab icon={categoryIcons.commercial} iconPosition="start" label="Commercial" value="commercial" />
            <Tab icon={categoryIcons.renovation} iconPosition="start" label="Renovation" value="renovation" />
          </Tabs>
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {filteredProjects.map((project, index) => (
            <Grid item key={index} xs={12} md={6} lg={4}>
              <Grow in timeout={800} style={{ transitionDelay: `${index * 100}ms` }}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.4s ease',
                    borderRadius: 4,
                    overflow: 'hidden',
                    boxShadow: `0 8px 32px ${alpha(theme.palette.common.black, 0.08)}`,
                    '&:hover': {
                      transform: 'translateY(-12px)',
                      boxShadow: `0 20px 48px ${alpha(theme.palette.common.black, 0.12)}`,
                      '& .project-image': {
                        transform: 'scale(1.05)',
                      },
                      '& .view-button': {
                        opacity: 1,
                        transform: 'translateY(0)',
                      }
                    },
                  }}
                >
                  <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                    <CardMedia
                      component="img"
                      height="280"
                      image={project.image}
                      alt={project.title}
                      className="project-image"
                      sx={{ 
                        transition: 'transform 0.5s ease',
                      }}
                    />
                    <Box 
                      className="view-button"
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: alpha(theme.palette.common.black, 0.5),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0,
                        transition: 'all 0.3s ease',
                        transform: 'translateY(10px)',
                      }}
                    >
                      <IconButton
                        sx={{
                          backgroundColor: theme.palette.primary.main,
                          color: 'white',
                          '&:hover': {
                            backgroundColor: theme.palette.primary.dark,
                            transform: 'scale(1.1)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                        onClick={() => handleClickOpen(project)}
                      >
                        <ZoomIn />
                      </IconButton>
                    </Box>
                    <Chip
                      label={project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: 16,
                        left: 16,
                        backgroundColor: theme.palette.primary.main,
                        color: 'white',
                        fontWeight: 'bold',
                      }}
                    />
                  </Box>
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography gutterBottom variant="h5" component="h2" fontWeight="bold">
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph sx={{ mb: 2 }}>
                      {project.description}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <LocationOn sx={{ fontSize: 18, color: 'text.secondary', mr: 1 }} />
                      <Typography variant="caption" color="text.secondary">
                        {project.location}
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <CalendarToday sx={{ fontSize: 18, color: 'text.secondary', mr: 1 }} />
                      <Typography variant="caption" color="text.secondary">
                        Completed: {project.year} • {project.duration}
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                      {project.features.map((feature, idx) => (
                        <Chip
                          key={idx}
                          label={feature}
                          size="small"
                          variant="outlined"
                          sx={{ 
                            borderRadius: 1,
                            backgroundColor: alpha(theme.palette.primary.main, 0.05),
                            borderColor: alpha(theme.palette.primary.main, 0.2),
                          }}
                        />
                      ))}
                    </Box>
                    
                    <Button
                      fullWidth
                      variant="outlined"
                      endIcon={<ArrowForward />}
                      sx={{ 
                        borderRadius: 2,
                        mt: 1,
                        py: 1,
                        fontWeight: 'bold',
                      }}
                      onClick={() => handleClickOpen(project)}
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </Grow>
            </Grid>
          ))}
        </Grid>

        {/* Project Detail Dialog */}
        <Dialog 
          open={open} 
          onClose={handleClose} 
          maxWidth="md" 
          fullWidth
          PaperProps={{
            sx: {
              borderRadius: 4,
              overflow: 'hidden',
            }
          }}
        >
          {selectedProject && (
            <>
              <DialogContent sx={{ p: 0 }}>
                <Box sx={{ position: 'relative' }}>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                  />
                  <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                      position: 'absolute',
                      right: 16,
                      top: 16,
                      backgroundColor: alpha(theme.palette.common.white, 0.9),
                      '&:hover': {
                        backgroundColor: theme.palette.common.white,
                      },
                    }}
                  >
                    <Close />
                  </IconButton>
                </Box>
                <Box sx={{ p: 4 }}>
                  <Typography variant="h4" gutterBottom fontWeight="bold">
                    {selectedProject.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    {selectedProject.description}
                  </Typography>
                  
                  <Grid container spacing={3} sx={{ mb: 3 }}>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                        <LocationOn sx={{ fontSize: 18, verticalAlign: 'bottom', mr: 1 }} />
                        Location
                      </Typography>
                      <Typography variant="body2">
                        {selectedProject.location}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                        <CalendarToday sx={{ fontSize: 18, verticalAlign: 'bottom', mr: 1 }} />
                        Completion Date
                      </Typography>
                      <Typography variant="body2">
                        {selectedProject.year} • {selectedProject.duration}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                        Project Size
                      </Typography>
                      <Typography variant="body2">
                        {selectedProject.size}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                        Category
                      </Typography>
                      <Typography variant="body2">
                        {selectedProject.category.charAt(0).toUpperCase() + selectedProject.category.slice(1)}
                      </Typography>
                    </Grid>
                  </Grid>
                  
                  <Typography variant="h6" gutterBottom fontWeight="bold">
                    Key Features
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                    {selectedProject.features.map((feature, idx) => (
                      <Chip
                        key={idx}
                        label={feature}
                        color="primary"
                        variant="filled"
                        sx={{ borderRadius: 1 }}
                      />
                    ))}
                  </Box>
                  
                  <Button
                    variant="contained"
                    size="large"
                    fullWidth
                    href="/contact"
                    sx={{ 
                      borderRadius: 2,
                      py: 1.5,
                      fontWeight: 'bold',
                      background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    }}
                  >
                    Start Your Project
                  </Button>
                </Box>
              </DialogContent>
            </>
          )}
        </Dialog>

        {/* Call to Action */}
        <Box sx={{ textAlign: 'center', mt: 10, mb: 4 }}>
          <Zoom in timeout={1000}>
            <Box>
              <Typography variant={isMobile ? "h4" : "h3"} gutterBottom fontWeight="bold">
                Ready to Start Your Project?
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph sx={{ maxWidth: 600, mx: 'auto', mb: 4 }}>
                Let us bring the same quality, innovation, and dedication to your next construction project.
              </Typography>
              <Button
                variant="contained"
                size="large"
                href="/contact"
                endIcon={<ArrowForward />}
                sx={{
                  borderRadius: 3,
                  px: 4,
                  py: 1.5,
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.3)}`,
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: `0 12px 30px ${alpha(theme.palette.primary.main, 0.4)}`,
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Get Started Today
              </Button>
            </Box>
          </Zoom>
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;