// pages/Contact.js
import { useState, useEffect } from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  alpha,
  useTheme,
  useMediaQuery,
  Fade,
  Slide,
  Zoom,
  Chip,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import {
  Phone,
  Email,
  LocationOn,
  Schedule,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  WhatsApp,
  Pinterest,
  YouTube,
  CheckCircle,
  ArrowForward,
  Chat,
  CalendarMonth
} from '@mui/icons-material';
import { keyframes } from '@emotion/react';

// Animations
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
  100% { transform: translateY(0px); }
`;

const floatReverse = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(12px); }
  100% { transform: translateY(0px); }
`;


const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const [isVisible, setIsVisible] = useState(false);
  const [openSuccessDialog, setOpenSuccessDialog] = useState(false);
  const [selectedAction, setSelectedAction] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleRequestCallback = (actionType) => {
    setSelectedAction(actionType);
    setOpenSuccessDialog(true);
  };

  // Modern contact methods - full wide layout
  const contactMethods = [
    
    {
      icon: <Email sx={{ fontSize: 32 }} />,
      title: 'Email Us',
      mainLine: 'info@versabuildbd.com',
      alternative: 'support@versabuildbd.com',
      description: 'Response within 24 hours',
      availability: 'Fast response',
      color: '#3B82F6',
      gradient: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
      action: 'mailto:info@versabuildbd.com',
      delay: '0.1s'
    },
    {
      icon: <LocationOn sx={{ fontSize: 32 }} />,
      title: 'Visit Our Office',
      mainLine: '44, Road: 01, Sector: 3',
      alternative: 'Jashimuddin Road, Uttara',
      description: 'Dhaka - 1230, Bangladesh',
      availability: 'Open for visitors',
      color: '#F59E0B',
      gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
      action: '#map',
      delay: '0.2s'
    },
    {
      icon: <Schedule sx={{ fontSize: 32 }} />,
      title: 'Working Hours',
      mainLine: 'Sunday - Thursday',
      alternative: '9:00 AM – 6:00 PM',
      description: 'Friday & Saturday: Closed',
      availability: 'Ready to serve',
      color: '#8B5CF6',
      gradient: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
      action: null,
      delay: '0.3s'
    },
  ];

  const socialMedia = [
    { icon: <Facebook sx={{ fontSize: 24 }} />, color: '#1877F2', name: 'Facebook', url: 'https://facebook.com', bgHover: '#1877F2' },
    { icon: <Twitter sx={{ fontSize: 24 }} />, color: '#1DA1F2', name: 'Twitter', url: 'https://twitter.com', bgHover: '#1DA1F2' },
    { icon: <Instagram sx={{ fontSize: 24 }} />, color: '#E4405F', name: 'Instagram', url: 'https://instagram.com', bgHover: '#E4405F' },
    { icon: <LinkedIn sx={{ fontSize: 24 }} />, color: '#0A66C2', name: 'LinkedIn', url: 'https://linkedin.com', bgHover: '#0A66C2' },
    { icon: <Pinterest sx={{ fontSize: 24 }} />, color: '#BD081C', name: 'Pinterest', url: 'https://pinterest.com', bgHover: '#BD081C' },
    { icon: <YouTube sx={{ fontSize: 24 }} />, color: '#FF0000', name: 'YouTube', url: 'https://youtube.com', bgHover: '#FF0000' },
    { icon: <WhatsApp sx={{ fontSize: 24 }} />, color: '#25D366', name: 'WhatsApp', url: 'https://wa.me/8801673820951', bgHover: '#25D366' },
  ];

  const quickActions = [
    {
      title: '📞 Request Callback',
      description: 'Get a call from our expert',
      icon: <Phone sx={{ fontSize: 30 }} />,
      action: () => handleRequestCallback('callback'),
      color: '#10B981'
    },
    {
      title: '💬 WhatsApp Now',
      description: 'Instant chat support',
      icon: <WhatsApp sx={{ fontSize: 30 }} />,
      action: () => window.open('https://wa.me/8801673820951', '_blank'),
      color: '#25D366'
    },
    {
      title: '📅 Schedule Meeting',
      description: 'Free consultation',
      icon: <CalendarMonth sx={{ fontSize: 30 }} />,
      action: () => handleRequestCallback('meeting'),
      color: '#8B5CF6'
    },
    {
      title: '🎥 Virtual Tour',
      description: 'See our projects online',
      icon: <Chat sx={{ fontSize: 30 }} />,
      action: () => handleRequestCallback('virtual'),
      color: '#F59E0B'
    }
  ];

  return (
    <Box sx={{ overflow: 'hidden', bgcolor: '#f8fafc', width: '100%' }}>
      {/* Hero Section - Full Width */}
      <Box
        sx={{
          width: '100%',
          minHeight: isMobile ? '60vh' : '70vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          background: `linear-gradient(125deg, ${alpha(theme.palette.primary.dark, 0.92)} 0%, ${alpha(theme.palette.secondary.dark, 0.88)} 100%), url(https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          py: isMobile ? 8 : 12,
        }}
      >
        <Container maxWidth={false} sx={{ px: { xs: 2, sm: 4, md: 6, lg: 8 } }}>
          <Fade in={isVisible} timeout={1000}>
            <Box sx={{ textAlign: 'center', maxWidth: 900, mx: 'auto', position: 'relative', zIndex: 2 }}>
              <Chip 
                label="✦ NO FORMS • DIRECT CONNECTION ✦" 
                sx={{ 
                  mb: 3, 
                  px: 3,
                  py: 1.8,
                  fontWeight: 700,
                  fontSize: { xs: '0.7rem', sm: '0.85rem' },
                  letterSpacing: 2,
                  background: alpha(theme.palette.common.white, 0.15),
                  color: 'white',
                  border: `1px solid ${alpha(theme.palette.common.white, 0.3)}`,
                  backdropFilter: 'blur(12px)',
                  '&:hover': { background: alpha(theme.palette.common.white, 0.25) }
                }} 
              />
              <Typography
                variant={isMobile ? "h2" : "h1"}
                fontWeight="800"
                gutterBottom
                sx={{
                  textShadow: '0 4px 30px rgba(0,0,0,0.3)',
                  letterSpacing: '-0.02em',
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #E2E8F0 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  textShadow: 'none'
                }}
              >
                Let's Build Together
              </Typography>
              <Typography 
                variant={isMobile ? "body1" : "h5"} 
                sx={{ 
                  maxWidth: 700, 
                  mx: 'auto', 
                  mt: 3,
                  opacity: 0.95,
                  fontWeight: 500,
                  lineHeight: 1.5
                }}
              >
                
              </Typography>
            </Box>
          </Fade>
        </Container>
        
        {/* Animated Background Elements */}
        <Box sx={{ position: 'absolute', top: '10%', left: '2%', width: 200, height: 200, borderRadius: '50%', background: `radial-gradient(${alpha(theme.palette.primary.light, 0.2)} 0%, transparent 70%)`, animation: `${float} 8s ease-in-out infinite`, zIndex: 1, display: isMobile ? 'none' : 'block' }} />
        <Box sx={{ position: 'absolute', bottom: '5%', right: '3%', width: 250, height: 250, borderRadius: '50%', background: `radial-gradient(${alpha(theme.palette.secondary.light, 0.15)} 0%, transparent 70%)`, animation: `${floatReverse} 10s ease-in-out infinite`, zIndex: 1, display: isMobile ? 'none' : 'block' }} />
      </Box>

      {/* Quick Actions Section - Full Width Cards */}
      <Container maxWidth={false} sx={{ px: { xs: 2, sm: 3, md: 5, lg: 7 }, py: { xs: 5, md: 8 }, mt: { xs: -4, md: -6 } }}>
        <Fade in={isVisible} timeout={800}>
          <Box>
            <Typography variant={isMobile ? "h5" : "h4"} align="center" gutterBottom fontWeight="700" sx={{ mb: 1 }}>
              Choose How to Connect
            </Typography>
            <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 5, maxWidth: 550, mx: 'auto' }}>
              Pick the fastest way to reach us — no email forms, just real people
            </Typography>
            
            <Grid container spacing={3} justifyContent="center">
              {quickActions.map((action, idx) => (
                <Grid item xs={12} sm={6} md={3} key={idx}>
                  <Zoom in={isVisible} timeout={500} style={{ transitionDelay: `${idx * 100}ms` }}>
                    <Card
                      sx={{
                        borderRadius: 4,
                        cursor: 'pointer',
                        transition: 'all 0.35s cubic-bezier(0.2, 0.9, 0.4, 1.1)',
                        background: `linear-gradient(145deg, white, ${alpha(action.color, 0.03)})`,
                        border: `1px solid ${alpha(action.color, 0.2)}`,
                        textAlign: 'center',
                        p: 2,
                        '&:hover': {
                          transform: 'translateY(-10px)',
                          boxShadow: `0 25px 40px -15px ${alpha(action.color, 0.4)}`,
                          borderColor: alpha(action.color, 0.5),
                          background: `linear-gradient(145deg, white, ${alpha(action.color, 0.08)})`
                        }
                      }}
                      onClick={action.action}
                    >
                      <CardContent>
                        <Box sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 80,
                          height: 80,
                          borderRadius: '50%',
                          background: `linear-gradient(145deg, ${alpha(action.color, 0.15)}, ${alpha(action.color, 0.05)})`,
                          color: action.color,
                          mb: 2,
                          animation: `${float} 5s ease-in-out infinite`
                        }}>
                          {action.icon}
                        </Box>
                        <Typography variant="h6" fontWeight="700" gutterBottom>
                          {action.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {action.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Zoom>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Fade>
      </Container>

      {/* Main Contact Section - Full Width Two Column Design */}
      <Container maxWidth={false} sx={{ px: { xs: 2, sm: 3, md: 5, lg: 7 }, py: { xs: 4, md: 6 } }}>
        <Grid container spacing={4}>
          {/* Contact Cards - Left Side (Full Wide) */}
          <Grid item xs={12} md={7}>
            <Slide in={isVisible} timeout={800} direction="right">
              <Box>
                <Typography variant={isMobile ? "h5" : "h3"} fontWeight="800" gutterBottom sx={{ letterSpacing: '-0.01em' }}>
                  Get in Touch
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4, maxWidth: '95%' }}>
                  Skip the wait — connect with our construction experts instantly through any channel below.
                </Typography>
                
                <Grid container spacing={3}>
                  {contactMethods.map((method, idx) => (
                    <Grid item xs={12} sm={6} key={idx}>
                      <Zoom in={isVisible} timeout={600} style={{ transitionDelay: method.delay }}>
                        <Card
                          sx={{
                            borderRadius: 4,
                            transition: 'all 0.3s ease',
                            background: `linear-gradient(145deg, white, ${alpha(method.color, 0.02)})`,
                            border: `1px solid ${alpha(method.color, 0.15)}`,
                            cursor: method.action ? 'pointer' : 'default',
                            height: '100%',
                            overflow: 'hidden',
                            '&:hover': method.action ? {
                              transform: 'translateX(8px)',
                              borderColor: alpha(method.color, 0.4),
                              boxShadow: `0 15px 30px -12px ${alpha(method.color, 0.3)}`,
                            } : {}
                          }}
                          onClick={() => method.action && (method.action === '#map' ? document.getElementById('map')?.scrollIntoView({ behavior: 'smooth' }) : window.open(method.action, '_self'))}
                        >
                          <CardContent sx={{ p: 3 }}>
                            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                              <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 56,
                                height: 56,
                                borderRadius: '18px',
                                background: `linear-gradient(135deg, ${alpha(method.color, 0.2)}, ${alpha(method.color, 0.08)})`,
                                color: method.color,
                                flexShrink: 0
                              }}>
                                {method.icon}
                              </Box>
                              <Box sx={{ flex: 1 }}>
                                <Typography variant="subtitle1" fontWeight="700" sx={{ mb: 0.5 }}>
                                  {method.title}
                                </Typography>
                                <Typography variant="body1" fontWeight="600" sx={{ mb: 0.5, wordBreak: 'break-word' }}>
                                  {method.mainLine}
                                </Typography>
                                {method.alternative && (
                                  <Typography variant="caption" sx={{ opacity: 0.7, display: 'block' }}>
                                    {method.alternative}
                                  </Typography>
                                )}
                                <Typography variant="caption" sx={{ opacity: 0.6, display: 'block', mt: 1 }}>
                                  {method.description}
                                </Typography>
                                <Chip 
                                  label={method.availability}
                                  size="small"
                                  sx={{ 
                                    mt: 1.5, 
                                    height: 22, 
                                    fontSize: '0.65rem',
                                    background: alpha(method.color, 0.15),
                                    color: method.color,
                                    fontWeight: 600
                                  }}
                                />
                              </Box>
                              {method.action && (
                                <ArrowForward sx={{ fontSize: 20, opacity: 0.5, mt: 1 }} />
                              )}
                            </Box>
                          </CardContent>
                        </Card>
                      </Zoom>
                    </Grid>
                  ))}
                </Grid>

                
              </Box>
            </Slide>
          </Grid>

         
        </Grid>
      </Container>

      {/* Map Section - Full Width */}
      <Box id="map" sx={{ py: { xs: 5, md: 8 }, bgcolor: alpha(theme.palette.grey[100], 0.5), width: '100%' }}>
        <Container maxWidth={false} sx={{ px: { xs: 2, sm: 3, md: 5, lg: 7 } }}>
          <Fade in={isVisible} timeout={1000}>
            <Box>
              <Typography variant={isMobile ? "h5" : "h3"} align="center" gutterBottom fontWeight="800">
                Find Our Location
              </Typography>
              <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 5, maxWidth: 650, mx: 'auto' }}>
                44, Road: 01, Sector: 3, Jashimuddin Road, Uttara, Dhaka – 1230, Bangladesh
              </Typography>
              
              <Box
                sx={{
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: `0 20px 40px -12px ${alpha(theme.palette.common.black, 0.25)}`,
                  border: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
                  height: isMobile ? 280 : isTablet ? 380 : 450,
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.226193505083!2d90.3924867!3d23.8614463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c50006678e83%3A0x5c13582a0e7d56cc!2sShahrish%20Engineering%20and%20Construction%20Ltd!5e0!3m2!1sen!2sbd!4v1720000000000!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="VersaBuild BD Office Location"
                />
              </Box>
            </Box>
          </Fade>
        </Container>
      </Box>

      {/* Success Dialog - No email sent */}
      <Dialog
        open={openSuccessDialog}
        onClose={() => setOpenSuccessDialog(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{ sx: { borderRadius: 5, p: 1 } }}
      >
        <DialogContent sx={{ p: 4, textAlign: 'center' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            <CheckCircle sx={{ fontSize: 80, color: '#10B981' }} />
          </Box>
          <Typography variant="h4" fontWeight="800" gutterBottom>
            We'll Reach Out!
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
            A construction specialist will contact you shortly via phone or WhatsApp.
          </Typography>
          <Box sx={{ bgcolor: alpha('#3B82F6', 0.08), p: 2.5, borderRadius: 3, mt: 2 }}>
            <Typography variant="body2">
              💬 Prefer instant chat? <strong>WhatsApp us directly</strong> at <strong style={{ color: '#25D366' }}>+8801673820951</strong>
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', pb: 4 }}>
          <Button 
            variant="contained" 
            onClick={() => setOpenSuccessDialog(false)}
            sx={{ borderRadius: 40, px: 4, py: 1.2, fontWeight: 600 }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Footer */}
      <Box sx={{ py: 4, textAlign: 'center', bgcolor: theme.palette.grey[50], borderTop: `1px solid ${alpha(theme.palette.divider, 0.5)}`, width: '100%' }}>
        <Container maxWidth={false}>
          <Typography variant="caption" color="text.secondary">
            © VersaBuild BD — No email forms. Direct communication only. Real people, real conversations.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Contact;