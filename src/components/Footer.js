// components/Footer.js
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
  TextField,
  Button,
  alpha,
  useTheme,
  InputAdornment
} from '@mui/material';
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  YouTube,
  Pinterest,
  Email,
  Phone,
  LocationOn,
  AccessTime,
  Send,
  Construction
} from '@mui/icons-material';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        background: `linear-gradient(to bottom, ${theme.palette.grey[900]} 0%, ${theme.palette.common.black} 100%)`,
        color: 'white',
        pt: 8,
        pb: 4,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        }
      }}
    >
      {/* Decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          bottom: -50,
          right: -50,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: `radial-gradient(${alpha(theme.palette.primary.main, 0.2)} 0%, transparent 70%)`,
          opacity: 0.3,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 100,
          left: -100,
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: `radial-gradient(${alpha(theme.palette.secondary.main, 0.2)} 0%, transparent 70%)`,
          opacity: 0.2,
        }}
      />
      
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Construction sx={{ fontSize: 40, color: theme.palette.primary.main, mr: 2 }} />
              <Typography variant="h5" fontWeight="bold">
                VersaBuild BD 
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 3, opacity: 0.8, lineHeight: 1.7 }}>
              Building dreams into reality with quality construction and exceptional service since 2025. 
              We specialize in residential, commercial, and renovation projects with a commitment to excellence.
            </Typography>
            
            {/* Awards/Certifications */}
            {/* <Paper 
              elevation={0} 
              sx={{ 
                p: 2, 
                mb: 3, 
                background: alpha(theme.palette.common.white, 0.05),
                borderLeft: `4px solid ${theme.palette.primary.main}`,
                borderRadius: 1
              }}
            >
              <Typography variant="body2" sx={{ fontStyle: 'italic', opacity: 0.9 }}>
                "Winner of Best Construction Company 2022"
              </Typography>
            </Paper>
            
            <Box sx={{ display: 'flex', gap: 1 }}>
              {['ISO9001', 'OSHA', 'LEED'].map((cert, index) => (
                <Chip
                  key={index}
                  label={cert}
                  size="small"
                  sx={{
                    background: alpha(theme.palette.primary.main, 0.2),
                    color: 'white',
                    fontWeight: 'bold'
                  }}
                />
              ))}
            </Box> */}
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mb: 3, position: 'relative' }}>
              Contact Information
              <Box 
                sx={{ 
                  width: 40, 
                  height: 3, 
                  background: theme.palette.primary.main, 
                  mt: 1 
                }} 
              />
            </Typography>
            
            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2.5 }}>
                <LocationOn sx={{ color: theme.palette.primary.main, mr: 2, mt: 0.5 }} />
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 'medium', mb: 0.5 }}>
                    Our Address
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8, lineHeight: 1.5 }}>
                    House: 44, Road: 01, Sector: 3,<br />
                    Jashimuddin Road, Uttara,<br />
                    Dhaka - 1230, Bangladesh
                  </Typography>
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2.5 }}>
                <Phone sx={{ color: theme.palette.primary.main, mr: 2 }} />
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 'medium', mb: 0.5 }}>
                    Phone Number
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    +8801673820951
                  </Typography>
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2.5 }}>
                <Email sx={{ color: theme.palette.primary.main, mr: 2 }} />
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 'medium', mb: 0.5 }}>
                    Email Address
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    versabuildbd@gmail.com
                  </Typography>
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <AccessTime sx={{ color: theme.palette.primary.main, mr: 2, mt: 0.5 }} />
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 'medium', mb: 0.5 }}>
                    Working Hours
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    Sunday-Saturday: 9AM-6PM<br />
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Quick Links & Newsletter */}
          <Grid item xs={12} md={4}>
            {/* Quick Links */}
            <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mb: 2 }}>
              Quick Links
            </Typography>
            <Grid container spacing={2} sx={{ mb: 4 }}>
              {['Home', 'About Us', 'Services', 'Projects', 'Testimonials', 'Contact'].map((item) => (
                <Grid item xs={6} key={item}>
                  <Link 
                    href="#" 
                    underline="none" 
                    sx={{
                      color: 'grey.300',
                      transition: 'color 0.3s',
                      '&:hover': {
                        color: theme.palette.primary.main,
                      }
                    }}
                  >
                    {item}
                  </Link>
                </Grid>
              ))}
            </Grid>
            
            {/* Newsletter Subscription */}
            <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mb: 2 }}>
              Subscribe to Our Newsletter
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, mb: 2 }}>
              Stay updated with our latest projects and offers
            </Typography>
            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                size="small"
                placeholder="Your email address"
                InputProps={{
                  sx: {
                    color: 'white',
                    background: alpha(theme.palette.common.white, 0.1),
                    borderRadius: 1,
                    '&:hover': {
                      background: alpha(theme.palette.common.white, 0.15),
                    }
                  },
                  endAdornment: (
                    <InputAdornment position="end">
                      <Email sx={{ color: 'grey.500' }} />
                    </InputAdornment>
                  )
                }}
              />
              <Button
                variant="contained"
                endIcon={<Send />}
                sx={{
                  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  borderRadius: 1,
                  py: 1,
                  '&:hover': {
                    background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                  }
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 5, bgcolor: alpha(theme.palette.common.white, 0.2) }} />
        
        {/* Bottom Section */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          alignItems: 'center', 
          justifyContent: 'space-between',
          gap: 3
        }}>
          {/* Copyright */}
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            © {new Date().getFullYear()} VersaBuild Construction. All rights reserved.
          </Typography>
          
          {/* Social Media */}
          <Box>
            {[
              { icon: <Facebook />, color: '#1877F2' },
              { icon: <Twitter />, color: '#1DA1F2' },
              { icon: <Instagram />, color: '#E4405F' },
              { icon: <LinkedIn />, color: '#0A66C2' },
              { icon: <YouTube />, color: '#FF0000' },
              { icon: <Pinterest />, color: '#BD081C' },
            ].map((social, index) => (
              <IconButton
                key={index}
                aria-label="Social media"
                sx={{
                  color: 'grey.400',
                  background: alpha(theme.palette.common.white, 0.1),
                  mr: 1,
                  '&:hover': {
                    background: social.color,
                    color: 'white',
                  }
                }}
              >
                {social.icon}
              </IconButton>
            ))}
          </Box>
          
          {/* Additional Links */}
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Link 
              href="#" 
              underline="none" 
              sx={{ 
                color: 'grey.400',
                fontSize: '0.875rem',
                '&:hover': {
                  color: theme.palette.primary.main,
                }
              }}
            >
              Privacy Policy
            </Link>
            <Link 
              href="#" 
              underline="none" 
              sx={{ 
                color: 'grey.400',
                fontSize: '0.875rem',
                '&:hover': {
                  color: theme.palette.primary.main,
                }
              }}
            >
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;