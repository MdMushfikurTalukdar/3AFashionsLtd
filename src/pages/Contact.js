// pages/Contact.js
import { useState, useEffect, useCallback } from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  Card,
  CardContent,
  alpha,
  useTheme,
  useMediaQuery,
  Fade,
  Slide,
  Zoom,
  Chip,
  IconButton,
  Divider,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Dialog,
  DialogContent,
  CircularProgress,
  DialogActions
} from '@mui/material';
import {
  Phone,
  Email,
  LocationOn,
  Schedule,
  Send,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Person,
  Message,
  CheckCircle,
  WhatsApp,
  Pinterest,
  YouTube
} from '@mui/icons-material';
import { keyframes } from '@emotion/react';

// Animation for floating elements
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

// Animation for pulse effect
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [openSuccessDialog, setOpenSuccessDialog] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const validateForm = useCallback(() => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) errors.message = 'Message is required';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', formData);
      setOpenSuccessDialog(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        budget: '',
        message: '',
      });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const projectTypes = [
    'Residential Construction',
    'Commercial Construction',
    'Renovation & Remodeling',
    'Design & Planning',
    'Project Management',
    'Sustainable Building',
    'Other'
  ];

  const budgetRanges = [
    'Less than $10,000',
    '$10,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $500,000',
    '$500,000 - $1M',
    'More than $1M'
  ];

  const contactMethods = [
    {
      icon: <Phone sx={{ fontSize: 40 }} />,
      title: 'Call Us',
      details: '+8801673820951',
      description: '',
      color: theme.palette.primary.main,
      action: '+8801673820951',
      animationDelay: '0s'
    },
    {
      icon: <Email sx={{ fontSize: 40 }} />,
      title: 'Email Us',
      details: 'info@versabuildbd.com',
      description: 'Send us a message anytime',
      color: theme.palette.secondary.main,
      action: 'mailto:info@versabuildbd.com',
      animationDelay: '0.2s'
    },
    {
      icon: <LocationOn sx={{ fontSize: 40 }} />,
      title: 'Visit Us',
      details: '44, Road: 01, Sector: 3, Jashimuddin Road, Uttara',
      description: 'Dhaka - 1230, Bangladesh',
      color: theme.palette.success.main,
      action: '#map',
      animationDelay: '0.4s'
    },
    {
      icon: <Schedule sx={{ fontSize: 40 }} />,
      title: 'office hour',
      details: 'Sunday-Thursday 9:00 - 6:00',
      description: '',
      color: theme.palette.warning.main,
      action: null,
      animationDelay: '0.6s'
    },
  ];

  const socialMedia = [
    { icon: <Facebook />, color: '#1877F2', name: 'Facebook', url: '#' },
    { icon: <Twitter />, color: '#1DA1F2', name: 'Twitter', url: '#' },
    { icon: <Instagram />, color: '#E4405F', name: 'Instagram', url: '#' },
    { icon: <LinkedIn />, color: '#0A66C2', name: 'LinkedIn', url: '#' },
    { icon: <Pinterest />, color: '#BD081C', name: 'Pinterest', url: '#' },
    { icon: <YouTube />, color: '#FF0000', name: 'YouTube', url: '#' },
    { icon: <WhatsApp />, color: '#25D366', name: 'WhatsApp', url: '#' },
  ];

  return (
    <Box sx={{ overflow: 'hidden' }}>
      {/* Hero Section with Animated Background */}
      <Box
        sx={{
          minHeight: isMobile ? '50vh' : '60vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          background: `linear-gradient(135deg, ${alpha(theme.palette.primary.dark, 0.8)} 0%, ${alpha(theme.palette.secondary.dark, 0.8)} 100%), url(https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          py: isMobile ? 4 : 8,
        }}
      >
        <Container maxWidth="lg">
          <Fade in={isVisible} timeout={1000}>
            <Box sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto', position: 'relative', zIndex: 2 }}>
              <Chip 
                label="GET IN TOUCH" 
                sx={{ 
                  mb: 3, 
                  px: 2,
                  py: 1,
                  fontWeight: 'bold',
                  background: alpha(theme.palette.common.white, 0.2),
                  color: 'white',
                  border: `1px solid ${alpha(theme.palette.common.white, 0.3)}`,
                  backdropFilter: 'blur(10px)'
                }} 
              />
              <Typography
                variant={isMobile ? "h3" : "h2"}
                fontWeight="bold"
                gutterBottom
                sx={{
                  textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                }}
              >
                Let's Build Your Vision Together
              </Typography>
              <Typography 
                variant={isMobile ? "body1" : "h6"} 
                sx={{ 
                  maxWidth: 600, 
                  mx: 'auto', 
                  mt: 3,
                  opacity: 0.9,
                  textShadow: '0 1px 3px rgba(0,0,0,0.3)',
                }}
              >
                Ready to start your construction project? Get in touch with our team for a free consultation and quote.
              </Typography>
            </Box>
          </Fade>
        </Container>
        
        {/* Animated elements */}
        <Box
          sx={{
            position: 'absolute',
            top: '20%',
            left: '5%',
            width: 100,
            height: 100,
            borderRadius: '50%',
            background: `radial-gradient(${alpha(theme.palette.primary.light, 0.3)} 0%, transparent 70%)`,
            animation: `${float} 6s ease-in-out infinite`,
            zIndex: 1,
            display: isMobile ? 'none' : 'block'
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '10%',
            right: '10%',
            width: 150,
            height: 150,
            borderRadius: '50%',
            background: `radial-gradient(${alpha(theme.palette.secondary.light, 0.3)} 0%, transparent 70%)`,
            animation: `${float} 8s ease-in-out infinite reverse`,
            zIndex: 1,
            display: isMobile ? 'none' : 'block'
          }}
        />
      </Box>

      {/* Contact Content */}
      <Container maxWidth="lg" sx={{ py: isMobile ? 5 : 10, position: 'relative', mt: isMobile ? -5 : -10 }}>
        <Paper 
          elevation={isMobile ? 6 : 24}
          sx={{ 
            borderRadius: 4,
            overflow: 'hidden',
            background: theme.palette.background.paper,
            boxShadow: `0 25px 50px ${alpha(theme.palette.common.black, 0.15)}`,
          }}
        >
          <Grid container>
            {/* Contact Form */}
            <Grid item xs={12} lg={7}>
              <Box sx={{ p: { xs: 3, sm: 4, md: 6 } }}>
                <Slide in={isVisible} timeout={800} direction="right">
                  <Box>
                    <Typography variant={isMobile ? "h4" : "h3"} fontWeight="bold" gutterBottom color="primary">
                      Send us a Message
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4 }}>
                      Fill out the form below and our team will get back to you within 24 hours.
                    </Typography>
                    
                    <Box component="form" onSubmit={handleSubmit} noValidate>
  <Grid container spacing={6}>
    {/* Name Field - First in row */}
    <Grid item xs={12} md={6}>
      <TextField
        required
        fullWidth
        label="Your Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={!!formErrors.name}
        helperText={formErrors.name}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Person color={formErrors.name ? "error" : "primary"} />
            </InputAdornment>
          ),
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: 2,
            '&:hover fieldset': {
              borderColor: formErrors.name ? theme.palette.error.main : theme.palette.primary.main,
            },
          },
        }}
      />
    </Grid>

    {/* Email Field - Second in row */}
    <Grid item xs={12} md={6}>
      <TextField
        required
        fullWidth
        label="Email Address"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        error={!!formErrors.email}
        helperText={formErrors.email}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Email color={formErrors.email ? "error" : "primary"} />
            </InputAdornment>
          ),
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: 2,
            '&:hover fieldset': {
              borderColor: formErrors.email ? theme.palette.error.main : theme.palette.primary.main,
            },
          },
        }}
      />
    </Grid>

    {/* Phone Field - First in second row */}
    <Grid item xs={12} md={6}>
      <TextField
        fullWidth
        label="Phone Number"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Phone color="primary" />
            </InputAdornment>
          ),
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: 2,
            '&:hover fieldset': {
              borderColor: theme.palette.primary.main,
            },
          },
        }}
      />
    </Grid>

    {/* Project Type Field - Second in second row */}
    <Grid item xs={12} md={6}>
      <FormControl fullWidth sx={{ borderRadius: 2 }}>
        <InputLabel>Project Type</InputLabel>
        <Select
          name="projectType"
          value={formData.projectType}
          label="Project Type"
          onChange={handleChange}
          sx={{ borderRadius: 2, width: '20cm' }}
        >
          <MenuItem value="">
            <em>Select a project type</em>
          </MenuItem>
          {projectTypes.map((type) => (
            <MenuItem key={type} value={type}>{type}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>

    {/* Budget Field - Full width (third row) */}
    <Grid item xs={12}>
      <FormControl fullWidth sx={{ borderRadius: 2 }}>
        <InputLabel>Budget Range</InputLabel>
        <Select
          name="budget"
          value={formData.budget}
          label="Budget Range"
          onChange={handleChange}
          sx={{ borderRadius: 2, width: '20cm' }}
        >
          <MenuItem value="">
            <em>Select a budget range</em>
          </MenuItem>
          {budgetRanges.map((range) => (
            <MenuItem key={range} value={range}>{range}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>

    <Grid item xs={12}>
      <Divider sx={{ my: 2 }} />
    </Grid>

    {/* Message Field - Full width (fourth row) */}
    <Grid item xs={12}>
      <TextField
        required
        fullWidth
        multiline
        rows={4}
        label="Your Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        error={!!formErrors.message}
        helperText={formErrors.message}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" sx={{ mt: 0.5, alignItems: 'flex-start' }}>
              <Message color={formErrors.message ? "error" : "primary"} />
            </InputAdornment>
          ),
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: 2,
            '&:hover fieldset': {
              borderColor: formErrors.message ? theme.palette.error.main : theme.palette.primary.main,
            },
            alignItems: 'flex-start'
            , width: '20cm'
          },
        }}
      />
    </Grid>

<Grid item xs={12}>
  <Divider sx={{ my: 2 }} />
</Grid>

    {/* Submit Button - Full width (fifth row) */}
    <Grid item xs={12}>
      <Button 
        type="submit" 
        variant="contained" 
        size="large"
        disabled={isLoading}
        endIcon={isLoading ? <CircularProgress size={20} /> : <Send />}
        sx={{
          borderRadius: 3,
          py: 1.5,
          width: isMobile ? '100%' : 'auto',
          minWidth: 200,
          fontSize: '1.1rem',
          background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          boxShadow: `0 8px 20px ${alpha(theme.palette.primary.main, 0.3)}`,
          '&:hover': {
            background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
            transform: 'translateY(-2px)',
            boxShadow: `0 12px 25px ${alpha(theme.palette.primary.main, 0.4)}`,
          },
          transition: 'all 0.3s ease',
          animation: isLoading ? 'none' : `${pulse} 2s ease-in-out infinite`,
        }}
      >
        {isLoading ? 'Sending...' : 'Send Message'}
      </Button>
    </Grid>
  </Grid>
</Box>
                  </Box>
                </Slide>
              </Box>
            </Grid>

            {/* Contact Methods Sidebar */}
            <Grid item xs={12} lg={5}>
              <Box 
                sx={{ 
                  height: '100%',
                  width: '31cm',
                  background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`,
                  color: 'white',
                  p: { xs: 3, sm: 4, md: 5 },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}
              >
                <Typography variant={isMobile ? "h5" : "h4"} fontWeight="bold" gutterBottom>
                  Contact Information
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.9, mb: 4 }}>
                  Reach out to us through any of these channels
                </Typography>

                <Box sx={{
  display: 'grid', 
  gridTemplateColumns: { 
    xs: '1fr', 
    md: '1fr 1fr' 
  }, 
  gap: 3, 
  mb: 5 
}}>
  {contactMethods.map((method, index) => (
    <Zoom in={isVisible} timeout={800} style={{ transitionDelay: method.animationDelay }} key={index}>
      <Card 
        sx={{
          borderRadius: 3,
          transition: 'all 0.3s ease',
          background: alpha(theme.palette.common.white, 0.1),
          border: `1px solid ${alpha(theme.palette.common.white, 0.2)}`,
          backdropFilter: 'blur(10px)',
          height: '100%',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: `0 8px 24px ${alpha(theme.palette.common.black, 0.2)}`,
            borderColor: alpha(theme.palette.common.white, 0.4),
          },
          cursor: method.action ? 'pointer' : 'default'
        }}
        onClick={() => method.action && window.open(method.action, '_self')}
      >
        <CardContent sx={{ p: 3, display: 'flex', alignItems: 'center', height: '100%' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 60,
              height: 60,
              borderRadius: '50%',
              bgcolor: alpha(theme.palette.common.white, 0.2),
              color: 'white',
              mr: 3,
              animation: `${float} 4s ease-in-out infinite`,
              animationDelay: method.animationDelay,
              flexShrink: 0
            }}
          >
            {method.icon}
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" gutterBottom>
              {method.title}
            </Typography>
            <Typography variant="body1" fontWeight="bold">
              {method.details}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              {method.description}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Zoom>
  ))}
</Box>

                <Box>
                  <Typography variant="h6" gutterBottom>
                    Follow Us
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                    {socialMedia.map((social, index) => (
                      <IconButton
                        key={index}
                        sx={{
                          color: 'white',
                          background: alpha(social.color, 0.2),
                          border: `1px solid ${alpha(social.color, 0.3)}`,
                          '&:hover': {
                            background: social.color,
                            transform: 'translateY(-2px)',
                            boxShadow: `0 4px 12px ${alpha(social.color, 0.4)}`,
                          },
                          transition: 'all 0.3s ease',
                        }}
                        aria-label={social.name}
                        onClick={() => window.open(social.url, '_blank')}
                      >
                        {social.icon}
                      </IconButton>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>

      {/* Map Section */}
      <Box sx={{ py: isMobile ? 5 : 10, bgcolor: alpha(theme.palette.grey[100], 0.5) }}>
        <Container maxWidth="lg">
          <Fade in={isVisible} timeout={1000}>
            <Box>
              <Typography variant={isMobile ? "h4" : "h3"} align="center" gutterBottom fontWeight="bold">
                Our Location
              </Typography>
              <Typography variant={isMobile ? "body1" : "h6"} align="center" color="text.secondary" paragraph sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}>
                Visit our office or reach out to us for directions
              </Typography>
              
<Box
  sx={{
    borderRadius: 4,
    overflow: 'hidden',
    boxShadow: `0 20px 40px ${alpha(theme.palette.common.black, 0.15)}`,
    border: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
    height: isMobile ? 300 : 450,
  }}
>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.226193505083!2d90.3924867!3d23.8614463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c50006678e83%3A0x5c13582a0e7d56cc!2sShahrish%20Engineering%20and%20Construction%20Ltd!5e0!3m2!1sen!2sbd!4v1720000000000!5m2!1sen!2sbd"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Shahrish Engineering and Construction Ltd Location"
  />
</Box>
            </Box>
          </Fade>
        </Container>
      </Box>

      {/* Success Dialog */}
      <Dialog
        open={openSuccessDialog}
        onClose={() => setOpenSuccessDialog(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 4,
            overflow: 'hidden',
          }
        }}
      >
        <DialogContent sx={{ p: 4, textAlign: 'center' }}>
          <CheckCircle sx={{ fontSize: 60, mb: 2, color: theme.palette.success.main }} />
          <Typography variant="h4" gutterBottom fontWeight="bold">
            Thank You!
          </Typography>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Your message has been sent successfully.
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.9, mb: 3 }}>
            Our team will get back to you within 24 hours.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', pb: 4 }}>
          <Button 
            variant="contained" 
            onClick={() => setOpenSuccessDialog(false)}
            sx={{ borderRadius: 3, px: 4 }}
          >
            Continue Browsing
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Contact;