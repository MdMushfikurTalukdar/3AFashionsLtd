import React, { useState, useEffect, useMemo } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Container,
  Badge,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FactoryIcon from '@mui/icons-material/Factory';
import PeopleIcon from '@mui/icons-material/People';
import GroupIcon from '@mui/icons-material/Group';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import CloseIcon from '@mui/icons-material/Close';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  const navigate = useNavigate();

  // Check if we're on the home page
  const isHomePage = location.pathname === '/';

  // Menu items with icons and sections - Memoized to prevent re-creation on every render
  const menuItems = useMemo(() => [
    { 
      text: 'Home', 
      id: 'home', 
      icon: <HomeIcon />,
      section: 'home',
      path: '/',
    },
    { 
      text: 'About Us', 
      id: 'aboutSection', 
      icon: <InfoIcon />,
      section: 'aboutSection',
      path: '/company-details',
    },
    { 
      text: 'Products', 
      id: 'product', 
      icon: <ShoppingBagIcon />,
      section: 'product',
      path: '/',
    },
    { 
      text: 'Facilities', 
      id: 'facilities', 
      icon: <FactoryIcon />,
      section: 'facilities',
      path: '/',
    },
    { 
      text: 'Our Clients', 
      id: 'clients', 
      icon: <PeopleIcon />,
      section: 'clients',
      path: '/',
    },
    { 
      text: 'Our Team', 
      id: 'team', 
      icon: <GroupIcon />,
      section: 'team',
      path: '/',
    },
    { 
      text: 'Contact', 
      id: 'contact', 
      icon: <ContactMailIcon />,
      section: 'contact',
      path: '/',
    },
  ], []); // Empty dependency array means this will only be created once

  // Handle scroll to section or navigation
  const handleNavigation = useMemo(() => (item) => {
    // Close mobile drawer if open
    if (mobileOpen) {
      setMobileOpen(false);
    }

    // Check if we need to navigate or scroll
    if (isHomePage) {
      // We're on the home page - scroll to section
      scrollToSection(item.id);
    } else {
      // We're on a different page - navigate to home then scroll
      if (item.path === '/') {
        // Navigate to home page
        navigate('/');
        // After navigation, scroll to section
        setTimeout(() => {
          scrollToSection(item.id);
        }, 300);
      } else {
        // Navigate to the specific page
        navigate(item.path);
        // If it's the company details page, scroll to top
        if (item.path === '/company-details') {
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }, 100);
        }
      }
    }
  }, [isHomePage, mobileOpen, navigate]);

  // Scroll to section function with offset
  const scrollToSection = (id) => {
    if (!id) return;
    
    const element = document.getElementById(id);
    if (element) {
      const offset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(id);
    } else {
      // If element not found, try to find it after a delay
      setTimeout(() => {
        const retryElement = document.getElementById(id);
        if (retryElement) {
          const offset = 70;
          const elementPosition = retryElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
          setActiveSection(id);
        }
      }, 500);
    }
  };

  // Handle click on company logo - navigate to home
  const handleLogoClick = useMemo(() => () => {
    if (isHomePage) {
      scrollToSection('home');
    } else {
      navigate('/');
      setTimeout(() => {
        scrollToSection('home');
      }, 300);
    }
  }, [isHomePage, navigate]);

  // Handle About Us click - special case for company details
  const handleAboutClick = useMemo(() => () => {
    if (isHomePage) {
      scrollToSection('aboutSection');
    } else {
      navigate('/company-details');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  }, [isHomePage, navigate]);

  // Handle mobile drawer toggle
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Detect active section on scroll
  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      let currentSection = 'home';

      menuItems.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = item.id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage, menuItems]); // menuItems is now stable due to useMemo

  // Drawer content
  const drawer = (
    <Box 
      sx={{ 
        textAlign: 'center', 
        pt: 2, 
        height: '100%',
        backgroundColor: '#f8f9fa',
      }}
    >
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          px: 2,
          mb: 2,
        }}
      >
        <Typography 
          variant="h6" 
          sx={{ 
            color: '#0a2b4a', 
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
          onClick={() => {
            handleLogoClick();
            setMobileOpen(false);
          }}
        >
          W. Apparels
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <List sx={{ pt: 2 }}>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => {
              handleNavigation(item);
            }}
            sx={{
              py: 1.5,
              '&:hover': {
                backgroundColor: 'rgba(255,107,53,0.08)',
              },
              backgroundColor: activeSection === item.id ? 'rgba(255,107,53,0.1)' : 'transparent',
              borderRight: activeSection === item.id ? '3px solid #ff6b35' : 'none',
            }}
          >
            <Box sx={{ mr: 2, color: activeSection === item.id ? '#ff6b35' : '#0a2b4a' }}>
              {item.icon}
            </Box>
            <ListItemText 
              primary={item.text}
              primaryTypographyProps={{
                fontWeight: activeSection === item.id ? 'bold' : 'normal',
                color: activeSection === item.id ? '#ff6b35' : '#0a2b4a',
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="fixed" 
        color="primary" 
        elevation={2}
        sx={{
          backgroundColor: 'rgba(10, 43, 74, 0.95)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              onClick={handleLogoClick}
              sx={{
                flexGrow: 1,
                fontWeight: 'bold',
                color: 'white',
                textDecoration: 'none',
                letterSpacing: 1,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                '&:hover': {
                  transform: 'scale(1.02)',
                  transition: 'transform 0.2s ease',
                },
              }}
            >
              <Box
                component="span"
                sx={{
                  display: 'inline-block',
                  mr: 1,
                  fontSize: '1.2rem',
                }}
              >
                👕
              </Box>
              W. Apparels Ltd.
            </Typography>

            {!isMobile ? (
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                {menuItems.map((item) => {
                  // Special handling for About Us
                  if (item.id === 'aboutSection') {
                    return (
                      <Button
                        key={item.text}
                        onClick={handleAboutClick}
                        sx={{
                          color: 'white',
                          px: 2,
                          py: 1,
                          '&:hover': {
                            backgroundColor: 'rgba(255,107,53,0.2)',
                            transform: 'translateY(-2px)',
                          },
                          borderRadius: 2,
                          borderBottom: activeSection === item.id ? '2px solid #ff6b35' : 'none',
                          transition: 'all 0.3s ease',
                          fontWeight: activeSection === item.id ? 'bold' : 'normal',
                        }}
                        startIcon={item.icon}
                      >
                        {item.text}
                        <Badge
                          color="secondary"
                          variant="dot"
                          sx={{ ml: 1 }}
                        />
                      </Button>
                    );
                  }

                  return (
                    <Button
                      key={item.text}
                      onClick={() => handleNavigation(item)}
                      sx={{
                        color: 'white',
                        px: 2,
                        py: 1,
                        '&:hover': {
                          backgroundColor: 'rgba(255,255,255,0.1)',
                          transform: 'translateY(-2px)',
                        },
                        borderRadius: 2,
                        borderBottom: activeSection === item.id ? '2px solid #ff6b35' : 'none',
                        transition: 'all 0.3s ease',
                        fontWeight: activeSection === item.id ? 'bold' : 'normal',
                      }}
                      startIcon={item.icon}
                    >
                      {item.text}
                    </Button>
                  );
                })}
              </Box>
            ) : (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.1)',
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 280,
            backgroundColor: '#f8f9fa',
          },
        }}
      >
        {drawer}
      </Drawer>

      <Toolbar />
    </>
  );
};

export default Header;